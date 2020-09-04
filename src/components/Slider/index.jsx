import React, { useState } from 'react';
import { number, string, func } from 'prop-types';
import MUISlider from '@material-ui/core/Slider';
import { useDebouncedCallback } from 'use-debounce';

import scss from './styles.module.scss';

const Slider = ({
  formTitle, minValue, maxValue, handleSliderChange,
}) => {
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);

  const [sliderDebounce] = useDebouncedCallback(
    (newValue) => {
      handleSliderChange(newValue);
    },
    200,
  );

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    sliderDebounce(newValue);
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

Slider.propTypes = {
  formTitle: string.isRequired,
  minValue: number,
  maxValue: number,
  handleSliderChange: func.isRequired,
};

Slider.defaultProps = {
  minValue: 0,
  maxValue: 0,
};

export default Slider;
