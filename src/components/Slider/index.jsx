import React, { useState } from 'react';
import MUISlider from '@material-ui/core/Slider';

import scss from './styles.module.scss';

const Slider = ({ minValue, maxValue, handleSliderChange }) => {
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    handleSliderChange(newValue);
  };

  return (
    <div className={scss['o-slider__wrapper']}>
      <div className={scss['o-slider__values']}>
        <h3 className={scss['o-slider__title']}>Price</h3>
        {`${sliderValue[0]} - ${sliderValue[1]}`}
      </div>
      <MUISlider
        value={sliderValue}
        min={minValue}
        max={maxValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
