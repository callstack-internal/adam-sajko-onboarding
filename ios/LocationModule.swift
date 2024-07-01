//
//  LocationModule.swift
//  WeatherApp
//
//  Created by Adam Sajko on 20/06/2024.
//

import Foundation
import CoreLocation

@objc(LocationModule)
class LocationModule: NSObject, CLLocationManagerDelegate {
  private var locationManager = CLLocationManager()
  private var resolve: RCTPromiseResolveBlock?
  private var reject: RCTPromiseRejectBlock?
  
  override init() {
    super.init()
    locationManager.delegate = self
  }
  
  @objc(getCurrentLocation:rejecter:)
  func getCurrentLocation(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    self.resolve = resolve
    self.reject = reject
    
    if CLLocationManager.locationServicesEnabled() {
      locationManager.desiredAccuracy = kCLLocationAccuracyBest
      let status = CLLocationManager.authorizationStatus()
      if status == .notDetermined {
        locationManager.requestWhenInUseAuthorization()
      } else if status == .authorizedWhenInUse || status == .authorizedAlways {
        locationManager.requestLocation()
      } else {
        reject("LocationError", "Location services are not authorized", nil)
      }
    } else {
      reject("LocationError", "Location services are not enabled", nil)
    }
  }
  
  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) -> Void {
    if let location = locations.last {
      resolve?([
        "latitude": location.coordinate.latitude,
        "longitude": location.coordinate.longitude
      ])
    }
  }
  
  func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    reject?("LocationError", "Failed to get current location", error)
  }
  
  // NOTE: This step is crucial if the user denies the location request when the modal appears, because requesting access is asynchronous and without this the promise will remain unresolved
  func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
    if status == .authorizedWhenInUse || status == .authorizedAlways {
      locationManager.requestLocation()
    } else if status == .denied || status == .restricted {
      reject?("LocationError", "Location services are not authorized", nil)
    }
  }
}

