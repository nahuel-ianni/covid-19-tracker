import React, { Fragment, useState } from 'react';

import styles from './CountryPicker.module.css';

import { Divider, FormControl, MenuItem, Select, Typography } from '@material-ui/core';

const CountryPicker = ({ countries, handleCountryChange }) => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const onChange = (e) => {
        setSelectedCountry(e.target.value);
        handleCountryChange(e.target.value);
    }

    return (
        <FormControl className={styles.container}>
            <Select labelId="countryPickerLabel" onChange={(e) => onChange(e)} value={selectedCountry}>
                <MenuItem value="" disabled>Select country</MenuItem>

                {countries.map(country =>
                    <Fragment>
                        <Divider light />
                        <MenuItem key={country.code} value={country} className={styles.country}>
                            <img src={country.flagUrl} alt={`Flag: ${country.name}`} />
                            <Typography>{country.name}</Typography>
                        </MenuItem>
                    </Fragment>
                )}
            </Select>
        </FormControl>
    );
}

export default CountryPicker;