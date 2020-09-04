import React, { useState } from 'react';
import { string, func } from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';

import scss from './styles.module.scss';

const Checkbox = ({ formTitle, label, handleCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    handleCheckboxChange(!isChecked);
  };

  return (
    <div>
      <h3 className={scss['o-checkbox__title']}>{formTitle}</h3>
      <FormControlLabel
        control={(
          <MUICheckbox
            checked={isChecked}
            onChange={handleChange}
          />
        )}
        label={label}
      />
    </div>
  );
};

Checkbox.propTypes = {
  formTitle: string.isRequired,
  label: string.isRequired,
  handleCheckboxChange: func.isRequired,
};

export default Checkbox;
