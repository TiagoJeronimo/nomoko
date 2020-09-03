import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';

import scss from './styles.module.scss';

const Switch = ({ handleSwitchChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    handleSwitchChange(!isChecked);
  };

  return (
    <div className={scss['o-switch__wrapper']}>
      <FormControlLabel
        control={(
          <MUICheckbox
            checked={isChecked}
            onChange={handleChange}
          />
        )}
        label="Parking"
      />
    </div>
  );
};

export default Switch;
