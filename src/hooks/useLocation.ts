import {useCallback, useEffect, useState} from 'react';
import LocationModule, {Coordinates} from '../location';

export function useLocation() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const updateCurrentLocation = useCallback(async () => {
    try {
      setLoading(true);
      const location = await LocationModule.getCurrentLocation();
      setCoordinates(location);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    updateCurrentLocation();
  }, [updateCurrentLocation]);

  return {
    coordinates,
    loading,
    error,
    refresh: updateCurrentLocation,
  };
}
