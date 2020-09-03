import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUISwitch from '@material-ui/core/Switch';

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
        control={<MUISwitch checked={isChecked} onChange={handleChange} />}
        label="Parking"
      />
    </div>
  );
};

export default Switch;
