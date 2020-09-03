import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import MUISelect from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import scss from './styles.module.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
}));

const Select = ({ handleSelectChange, options }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const classes = useStyles();

  const handleChange = (event) => {
    const filterValue = event.target.value;
    setSelectedValues(filterValue);
    handleSelectChange(filterValue);
  };

  return (
    <div className={scss['o-select__wrapper']}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Building Type</InputLabel>
        <MUISelect
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selectedValues}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
        >
          {options.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedValues.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </div>
  );
};

export default Select;
