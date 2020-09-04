import React, { useState } from 'react';
import {
  GoogleMap, LoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';

import { dataToInternationalisationKey } from '../../utils/formating';
import keys from '../../enums/keys';
import scss from './styles.module.scss';

const mapContainerStyle = {
  height: '800px',
  width: '100%',
};

const center = {
  lat: 47.3686498,
  lng: 8.5391825,
};

const Map = ({ propertiesData }) => {
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { t } = useTranslation('houseSearch');

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
            <div className={scss['o-map__infoWindow']}>
              <h4 className={scss['o-map__infoWindow__infoDescription']}>
                {t('map.buildingType')}
                {': '}
                <span className={scss['o-map__infoWindow__infoValue']}>
                  {t(`filters.${dataToInternationalisationKey(propertiesData[selectedMarker.id].buildingType)}`)}
                </span>
              </h4>
              <h4 className={scss['o-map__infoWindow__infoDescription']}>
                {t('map.price')}
                {'/m^2: '}
                <span className={scss['o-map__infoWindow__infoValue']}>
                  {propertiesData[selectedMarker.id].price}
                </span>
              </h4>
              <h4 className={scss['o-map__infoWindow__infoDescription']}>
                {t('map.parking')}
                {': '}
                <span className={scss['o-map__infoWindow__infoValue']}>
                  {propertiesData[selectedMarker.id].parking ? t('yes') : t('no')}
                </span>
              </h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
