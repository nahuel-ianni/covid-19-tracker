import React from 'react';

import styles from './CountryPicker.module.css';

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';

const CountryPicker = ({ handleCountryChange }) => {
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
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            <FormHelperText><em>Choose a country for detailed stats</em></FormHelperText>
        </FormControl>
    )
}

export default CountryPicker;