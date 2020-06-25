import React, { useState, useEffect } from 'react';

import { CountryPicker, PreventiveMeasures, StatisticsPanel } from '../../components';
import { GetCardValues, GetCountries, GetRecommendedMeasures } from '../../data/service';

import { Container, Typography } from '@material-ui/core';

const Home = () => {
    const preventiveMeasures = GetRecommendedMeasures();

    const [globalValues, setGlobalValues] = useState([]);
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [countryValues, setCountryValues] = useState([]);

    useEffect(() => {
        const getCountries = async () => { setCountries(await GetCountries()); }
        // const getCountryData = async () => { setCountryValues(await GetCardValues('Afghanistan')); }
        const getGlobalData = async () => { setGlobalValues(await GetCardValues()); }

        getCountries();
        // getCountryData();
        getGlobalData();
    }, []);

    const handleCountryChange = async (country) => {
        setCountryName(country?.Country);
        setCountryValues(await GetCardValues(country?.ISO2));
    };

    return (
        <Container>
            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Global stats</Typography>
                <StatisticsPanel values={globalValues} />
            </section>

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>{countryName}</Typography>
                <StatisticsPanel values={countryValues} />
                <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />
            </section>

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Preventive measures</Typography>
                <PreventiveMeasures measures={preventiveMeasures} />
            </section>
        </Container>
    )
}

export default Home;