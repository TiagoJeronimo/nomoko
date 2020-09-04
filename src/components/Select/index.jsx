import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import MUISelect from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import scss from './styles.module.scss';
import { dataToInternationalisationKey } from '../../utils/formating';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // minWidth: 120
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Select = ({ label, handleSelectChange, options }) => {
  const { t } = useTranslation('houseSearch');
  const [selectedValues, setSelectedValues] = useState([]);
  const classes = useStyles();

  const handleChange = (event) => {
    const filterValue = event.target.value;
    setSelectedValues(filterValue);
    handleSelectChange(filterValue);
  };

  return (
    <FormControl>
      <InputLabel id="selectLabel">{label}</InputLabel>
      <MUISelect
        labelId="selectLabel"
        multiple
        value={selectedValues}
        onChange={handleChange}
        renderValue={(selected) => selected.map((value) => t(`filters.${dataToInternationalisationKey(value)}`)).join(', ')}
        MenuProps={{ variant: 'menu' }}
      >
        {options.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={selectedValues.includes(name)} />
            <ListItemText primary={t(`filters.${dataToInternationalisationKey(name)}`)} />
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
