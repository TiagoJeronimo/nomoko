import React, { useState } from 'react';
import MUISlider from '@material-ui/core/Slider';

import scss from './styles.module.scss';

const Slider = ({ minValue, maxValue, handleSliderChange }) => {
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    handleSliderChange(newValue);
  };

  return (
    <div className={scss['o-slider__wrapper']}>
      <div>{sliderValue[0]}</div>
      <div>{sliderValue[1]}</div>
      <MUISlider
        value={sliderValue}
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
};

export default Slider;
