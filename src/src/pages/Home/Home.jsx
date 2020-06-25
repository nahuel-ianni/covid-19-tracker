import React, { useState, useEffect } from 'react';

import { CountryPicker, PreventiveMeasures, StatisticsPanel } from '../../components';
import { GetCardValues, GetCountries, GetRecommendedMeasures } from '../../data/service';

import { Container, Typography } from '@material-ui/core';

const Home = () => {
    const preventiveMeasures = GetRecommendedMeasures();

    const [globalValues, setGlobalValues] = useState([]);
    const [countries, setCountries] = useState([]);
    const [countryValues, setCountryValues] = useState([]);

    useEffect(() => {
        const getCountries = async () => { setCountries(await GetCountries()); }
        // const getCountryData = async () => { setCountryValues(await GetCardValues('Afghanistan')); }
        const getGlobalData = async () => { setGlobalValues(await GetCardValues()); }

        getCountries();
        // getCountryData();
        getGlobalData();
    }, []);

    const handleCountryChange = async (countryCode) => {
        console.log(countryCode);
        // setCountryValues(await GetCardValues(countryCode));
    };

    return (
        <Container>
            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Global stats</Typography>
                <StatisticsPanel values={globalValues} />
            </section>

            <section>
                {/* <Typography component="h2" variant="inherit" gutterBottom>UPDATE DYNAMIC - Local stats</Typography> */}
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