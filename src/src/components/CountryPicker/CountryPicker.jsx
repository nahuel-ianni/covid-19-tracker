import React, { useState } from 'react';

import styles from './CountryPicker.module.css';

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';

const CountryPicker = ({ countries, handleCountryChange }) => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const onChange = (e) => {
        setSelectedCountry(e.target.value);
        handleCountryChange(e.target.value.ISO2);
    }

    return (
        <FormControl className={styles.container}>
            <InputLabel id="countryPickerLabel">Country</InputLabel>
            <Select labelId="countryPickerLabel" onChange={(e) => onChange(e)} value={selectedCountry}>
                <MenuItem value="" disabled>Select country</MenuItem>

                {countries.map(country =>
                    <MenuItem key={country.ISO2} value={country}>{country.Country}</MenuItem>
                )}
            </Select>
            <FormHelperText><em>Choose a country for detailed stats</em></FormHelperText>
        </FormControl>
    )
}

export default CountryPicker;