import React, { useState, useEffect } from 'react';

import { CountryPicker, PreventiveMeasures, StatisticsPanel } from '../../components';
import { GetCountries, GetDataByCountry, GetLastUpdateDateTime, GetRecommendedMeasures } from '../../data/service';

import { Container, Typography } from '@material-ui/core';

const Home = () => {
    const preventiveMeasures = GetRecommendedMeasures();

    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [countryValues, setCountryValues] = useState([]);
    const [globalValues, setGlobalValues] = useState([]);
    const [lastUpdate, setLastUpdate] = useState('');

    useEffect(() => {
        const getCountries = async () => { setCountries(await GetCountries()); }
        const getGlobalData = async () => { setGlobalValues(await GetDataByCountry()); }
        const getLastUpdate = async () => { setLastUpdate(await GetLastUpdateDateTime()); }

        getCountries();
        getGlobalData();
        getLastUpdate();
    }, []);

    const handleCountryChange = async (country) => {
        setCountryName(country?.Country);
        setCountryValues(await GetDataByCountry(country?.ISO2));
    };

    return (
        <Container>
            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Global</Typography>
                <StatisticsPanel values={globalValues} />
            </section>

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>{countryName}</Typography>
                <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />
                <StatisticsPanel values={countryValues} />
            </section>

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Preventive measures</Typography>
                <PreventiveMeasures measures={preventiveMeasures} />
            </section>

            <Typography component="p" color="textSecondary" className="legend" align="center">
                Last updated on {new Date(lastUpdate).toLocaleString()}
            </Typography>
        </Container>
    )
}

export default Home;