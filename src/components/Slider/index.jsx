import React, { useState } from 'react';
import MUISlider from '@material-ui/core/Slider';

import scss from './styles.module.scss';

const Slider = ({
  formTitle, minValue, maxValue, handleSliderChange,
}) => {
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    handleSliderChange(newValue);
  };

  return (
    <div>
      <h3 className={scss['o-slider__title']}>{formTitle}</h3>
      {`${sliderValue[0]} - ${sliderValue[1]}`}
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
