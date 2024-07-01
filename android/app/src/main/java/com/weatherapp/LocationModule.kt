package com.weatherapp

import android.Manifest
import android.content.pm.PackageManager
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.core.PermissionAwareActivity
import com.facebook.react.modules.core.PermissionListener
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import com.google.android.gms.tasks.Task


@ReactModule(name = LocationModule.NAME)
class LocationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), PermissionListener {

    companion object {
        const val NAME = "LocationModule"
        const val REQUEST_CODE = 1001
    }

    private var fusedLocationClient: FusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(reactContext)
    private var promise: Promise? = null

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        this.promise = promise

        if (ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            // NOTE: It is important to cast the currentActivity to "PermissionAwareActivity"
            // in order to request permissions with the current listener as the third argument
            val activity = currentActivity as PermissionAwareActivity
            activity.requestPermissions(arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION), REQUEST_CODE, this)
            return
        }

        fusedLocationClient.lastLocation.addOnCompleteListener { task: Task<android.location.Location> ->
            if (task.isSuccessful && task.result != null) {
                val location = task.result
                val locationMap = Arguments.createMap()
                locationMap.putDouble("latitude", location.latitude)
                locationMap.putDouble("longitude", location.longitude)
                promise.resolve(locationMap)
            } else {
                promise.reject("LOCATION_UNAVAILABLE", "Location unavailable")
            }
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray): Boolean {
        if (requestCode == REQUEST_CODE) {
            if ((grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED)) {
                // retry getCurrentLocation after permission is granted
                promise?.let { getCurrentLocation(it) }
                return true
            }
            promise?.reject("PERMISSION_DENIED", "Location permission denied")
        }
        return false
    }
}
