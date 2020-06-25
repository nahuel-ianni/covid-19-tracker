import React from 'react';

import styles from './CountryPicker.module.css';

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';

const CountryPicker = ({ countries, handleCountryChange }) => {
    return (
        <FormControl className={styles.container}>
            <InputLabel id="countryPickerLabel">Country</InputLabel>
            <Select
                labelId="countryPickerLabel"
                // id="countryPicker"
                // value={age}
                onChange={handleCountryChange}
            >
                <MenuItem value="" disabled>Select country</MenuItem>
                
                {countries.map((country, i) =>
                    <MenuItem key={country.ISO2} value={country.ISO2}>{country.Country}</MenuItem>
                )}
            </Select>
            <FormHelperText><em>Choose a country for detailed stats</em></FormHelperText>
        </FormControl>
    )
}

export default CountryPicker;