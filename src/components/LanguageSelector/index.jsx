import React, { useState } from 'react';
import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Languages from '../../enums/Languages';

const LanguageSelector = ({ handleLanguageChange }) => {
  const { t } = useTranslation('houseSearch');
  const [language, setLanguage] = useState('en');

  const handleChange = (event) => {
    setLanguage(event.target.value);
    handleLanguageChange(event.target.value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel
        id="languageSelectorLabel"
        data-testid="languageSelector-label"
      >
        {t('language')}
      </InputLabel>
      <Select
        labelId="languageSelectorLabel"
        value={language}
        onChange={handleChange}
        label={t('language')}
      >
        <MenuItem value="en">{Languages.EN}</MenuItem>
        <MenuItem value="de">{Languages.DE}</MenuItem>
      </Select>
    </FormControl>
  );
};

LanguageSelector.propTypes = {
  handleLanguageChange: func.isRequired,
};

export default LanguageSelector;
