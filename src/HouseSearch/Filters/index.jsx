import React, { useState, useEffect } from 'react';

import scss from './styles.module.scss';
import Switch from '../../components/Switch';
import Select from '../../components/Select';
import Slider from '../../components/Slider';

const Filters = ({ propertiesData, handleFiltersChange }) => {
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
      <h3>Search filters</h3>
      <Switch handleSwitchChange={handleParkingChange} />
      <Select options={buildingTypes} handleSelectChange={handleBuildingChange} />
      {highestPrice !== null
        && <Slider minValue={0} maxValue={Math.ceil(highestPrice)} handleSliderChange={handlePriceChange} />}
    </div>
  );
};

export default Filters;
