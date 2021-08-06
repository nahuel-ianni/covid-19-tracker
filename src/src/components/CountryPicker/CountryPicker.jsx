import React, { useState } from 'react';

import styles from './CountryPicker.module.css';

import { FormControl, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CountryPicker = ({ countries, handleCountryChange }) => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const onChange = (country) => {
        setSelectedCountry(country);
        handleCountryChange(country);
    }

    return (
        // <FormControl className={styles.container}>
        //     <Select onChange={(e) => onChange(e)} value={selectedCountry} renderValue={() => selectedCountry.name} className={styles.select}>
        //         <MenuItem value="" disabled>Select country</MenuItem>

        //         {countries.map(country =>
        //             <MenuItem key={country.code} value={country} className={styles.menuItem}>
        //                 <img src={country.flagUrl} alt={`Flag: ${country.name}`} />
        //                 <Typography>{country.name}</Typography>
        //             </MenuItem>
        //         )}
        //     </Select>
        // </FormControl>

        <FormControl className={styles.container}>
            <Autocomplete
                options={countries}
                value={selectedCountry}
                className={styles.select}
                getOptionLabel={country => country?.name ?? ''}
                // getOptionSelected={(option, value) => option === value }
                renderInput={params => <TextField {...params} inputProps={{ ...params.inputProps }} />}

                onChange={(e, country) => { onChange(country) }}

                renderOption={(country) => (
                    <div className={styles.menuItem}>
                        <img src={country.flagUrl} alt={`Flag: ${country.name}`} />
                        <Typography>{country.name}</Typography>
                    </div>
                )}
            />
        </FormControl>
    );
}

export default CountryPicker;