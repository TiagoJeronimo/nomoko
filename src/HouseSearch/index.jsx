import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

import scss from './styles.module.scss';
import Map from './Map';
import Filters from './Filters';
import CSVFile from '../assets/documents/properties_f.csv';
import { formatPropertiesData } from './utils';

const HouseSearch = () => {
  const [propertiesData, setPropertiesData] = useState(null);
  const [filteredPropertiesData, setFilteredPropertiesData] = useState(null);

  useEffect(() => {
    const fetchDataFromCSV = async () => {
      const data = await fetch(CSVFile)
        .then((response) => response.text());

      Papa.parse(data, {
        complete(results) {
          const formatedResults = results.data.map((propertyData) => formatPropertiesData(propertyData));
          setPropertiesData(formatedResults);
          setFilteredPropertiesData(formatedResults);
          console.log(formatedResults);
        },
        header: true,
        delimiter: ';',
        skipEmptyLines: true,
      });
    };

    fetchDataFromCSV();
  }, [setPropertiesData, setFilteredPropertiesData]);

  const handleFiltersChange = (filters) => {
    const filteredProperties = propertiesData.filter((property) => {
      if (filters.parking && !property.parking) {
        return null;
      }

      if (filters.buildingType?.length > 0 && !filters.buildingType.includes(property.buildingType)) {
        return null;
      }

      if (property.price < filters.price?.[0] || property.price > filters.price?.[1]) {
        return null;
      }

      return property;
    });

    setFilteredPropertiesData(filteredProperties);
  };

  return (
    <div className={scss['p-houseSearch']}>
      <h2 className={scss['p-houseSearch__title']}>
        {`${filteredPropertiesData ? filteredPropertiesData.length : 0} available properties`}
      </h2>
      <div className={scss['p-houseSearch__mainSection']}>
        <Filters propertiesData={propertiesData} handleFiltersChange={handleFiltersChange} />
        <Map
          propertiesData={filteredPropertiesData}
        />
      </div>
    </div>
  );
};

export default HouseSearch;
