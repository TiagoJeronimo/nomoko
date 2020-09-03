import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import keys from '../../enums/keys';

const mapContainerStyle = {
  height: '400px',
  width: '800px',
};

const center = {
  lat: 47.3686498,
  lng: 8.5391825,
};

const position = {
  lat: 47.3686498,
  lng: 8.5391825,
};

const Map = () => {
  const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback((map) => {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={keys.GOOGLE_MAPS_KEY}
    // googleMapsApiKey=""
    >
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={position}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
