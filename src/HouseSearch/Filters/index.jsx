import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import scss from './styles.module.scss';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import Slider from '../../components/Slider';

const Filters = ({ propertiesData, handleFiltersChange }) => {
  const { t } = useTranslation('houseSearch');
  const [filterValues, setFilterValues] = useState({});
  const [buildingTypes, setBuildingTypes] = useState([]);
  const [highestPrice, setHighestPrice] = useState(null);

  useEffect(() => {
    if (!propertiesData) return;

    const distincBuildingTypes = [...new Set(propertiesData.map((property) => property.buildingType))];
    setBuildingTypes(distincBuildingTypes);

    const highestPriceValue = Math.max(...propertiesData.map((property) => property.price));
    setHighestPrice(highestPriceValue);
  }, [propertiesData]);

  const handleParkingChange = (value) => {
    const filters = { ...filterValues, parking: value };
    handleFiltersChange(filters);
    setFilterValues(filters);
  };

  const handleBuildingChange = (value) => {
    const filters = { ...filterValues, buildingType: value };
    handleFiltersChange(filters);
    setFilterValues(filters);
  };

  const handlePriceChange = (value) => {
    const filters = { ...filterValues, price: value };
    handleFiltersChange(filters);
    setFilterValues(filters);
  };

  return (
    <div className={scss['o-filter__wrapper']}>
      <h3>{t('filters.searchFilters')}</h3>
      <form className={scss['o-filter__innerWrapper']}>
        <Select
          label={t('filters.buildingType')}
          options={buildingTypes}
          handleSelectChange={handleBuildingChange}
        />
        {highestPrice !== null
          && (
            <Slider
              formTitle={t('filters.price')}
              minValue={0}
              maxValue={Math.ceil(highestPrice)}
              handleSliderChange={handlePriceChange}
            />
          )}
        <Checkbox
          formTitle={t('filters.other')}
          label={t('filters.parking')}
          handleCheckboxChange={handleParkingChange}
        />
      </form>
    </div>
  );
};

export default Filters;
