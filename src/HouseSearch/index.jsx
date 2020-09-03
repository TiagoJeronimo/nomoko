import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

import scss from './styles.module.scss';
import Map from './Map';
import CSVFile from '../assets/documents/properties_f.csv';
import { formatPropertiesData } from './utils';

const HouseSearch = () => {
  const [propertiesData, setPropertiesData] = useState(null);

  useEffect(() => {
    const fetchDataFromCSV = async () => {
      const data = await fetch(CSVFile)
        .then((response) => response.text());

      Papa.parse(data, {
        complete(results) {
          const formatedResults = results.data.map((propertyData) => formatPropertiesData(propertyData));
          setPropertiesData(formatedResults);
          console.log(formatedResults);
        },
        header: true,
        delimiter: ';',
      });
    };

    fetchDataFromCSV();
  }, [setPropertiesData]);

  return (
    <>
      <div className={scss['p-houseSearch']}>
        MAPPAGE
      </div>
      <Map
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </>
  );
};

export default HouseSearch;
