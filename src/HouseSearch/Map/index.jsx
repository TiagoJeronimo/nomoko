import React, { useState } from 'react';
import {
  GoogleMap, LoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';

import keys from '../../enums/keys';

const mapContainerStyle = {
  height: '800px',
  width: '100%',
};

const center = {
  lat: 47.3686498,
  lng: 8.5391825,
};

// const position = {
//   lat: 47.3686498,
//   lng: 8.5391825,
// };

const Map = ({ propertiesData }) => {
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // const onLoad = React.useCallback((map) => {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  const onMarkerClick = (props, marker) => {
    setSelectedMarker({ id: marker, position: props.latLng });
  };

  const onCloseClick = () => {
    setSelectedMarker(null);
  };

  return (
    <LoadScript
      // googleMapsApiKey={keys.GOOGLE_MAPS_KEY}
      googleMapsApiKey=""
    >
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {propertiesData && propertiesData.map(({ coordinates }, index) => (
          <Marker
            id="babab"
            key={index}
            name="aa"
            position={{ lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1]) }}
            onClick={(event) => onMarkerClick(event, index)}
          />
        ))}

        {selectedMarker && propertiesData[selectedMarker.id] && (
          <InfoWindow
            position={{ lat: selectedMarker.position.lat(), lng: selectedMarker.position.lng() }}
            onCloseClick={onCloseClick}
          >
            <div>
              <div>
                BuildingType:
                {' '}
                {propertiesData[selectedMarker.id].buildingType}
              </div>
              <div>
                Parking:
                {' '}
                {propertiesData[selectedMarker.id].parking ? 'yes' : 'no'}
              </div>
              <div>
                Price/m^2:
                {' '}
                {propertiesData[selectedMarker.id].price}
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
