import React, { useState } from 'react';

import styles from './CountryPicker.module.css';

import { FormControl, MenuItem, Select, Typography } from '@material-ui/core';

const CountryPicker = ({ countries, handleCountryChange }) => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const onChange = (e) => {
        setSelectedCountry(e.target.value);
        handleCountryChange(e.target.value);
    }

    return (
        <FormControl className={styles.container}>
            {/* <svg width="24" height="24" viewBox="0 0 24 24" className={styles.search}>
                <path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>
            </svg> */}

            <Select onChange={(e) => onChange(e)} value={selectedCountry} renderValue={() => selectedCountry.name} className={styles.select}>
                <MenuItem value="" disabled>Select country</MenuItem>

                {countries.map(country =>
                    <MenuItem key={country.code} value={country} className={styles.menuItem}>
                        <img src={country.flagUrl} alt={`Flag: ${country.name}`} />
                        <Typography>{country.name}</Typography>
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    );
}

export default CountryPicker;