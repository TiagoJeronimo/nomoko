import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { useTranslation, withTranslation } from 'react-i18next';

import i18n from '../i18n';
import scss from './styles.module.scss';
import Map from './Map';
import Filters from './Filters';
import CSVFile from '../assets/documents/properties_f.csv';
import { formatPropertiesData } from './utils';
import LanguageSelector from '../components/LanguageSelector';

const HouseSearch = () => {
  const { t } = useTranslation('houseSearch');
  const [propertiesData, setPropertiesData] = useState(null);
  const [filteredPropertiesData, setFilteredPropertiesData] = useState(null);

  const handleLanguageChange = (language) => {
    console.log('language', language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const fetchDataFromCSV = async () => {
      const data = await fetch(CSVFile)
        .then((response) => response.text());

      Papa.parse(data, {
        complete(results) {
          const formatedResults = results.data.map((propertyData) => formatPropertiesData(propertyData));
          setPropertiesData(formatedResults);
          setFilteredPropertiesData(formatedResults);
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
      <div className={scss['p-houseSearch__titleWrapper']}>
        <h2 className={scss['p-houseSearch__title']}>
          {`${filteredPropertiesData ? filteredPropertiesData.length : 0} ${t('availableProperties')}`}
        </h2>
        <LanguageSelector handleLanguageChange={handleLanguageChange} />
      </div>
      <div className={scss['p-houseSearch__mainSection']}>
        <Filters propertiesData={propertiesData} handleFiltersChange={handleFiltersChange} />
        <Map
          propertiesData={filteredPropertiesData}
        />
      </div>
    </div>
  );
};

export default withTranslation()(HouseSearch);
