import React, { useState, useEffect } from 'react';

import { PreventiveMeasures, StatisticsPanel } from '../../components';
import { GetCardValues, GetRecommendedMeasures } from '../../data/service';

import { Container, Typography } from '@material-ui/core';

const Home = () => {
    const preventiveMeasures = GetRecommendedMeasures();

    const [globalValues, setGlobalValues] = useState([]);
    const [countryValues, setCountryValues] = useState([]);

    useEffect(() => {
        const getGlobalData = async () => { setGlobalValues(await GetCardValues()); }
        const getCountryData = async () => { setCountryValues(await GetCardValues('Afghanistan')); }
        
        getGlobalData();
        getCountryData();
    }, []);

    return (
        <Container>
            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Global stats</Typography>
                <StatisticsPanel values={globalValues} />
            </section>

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>UPDATE DYNAMIC - Local stats</Typography>
                <StatisticsPanel values={countryValues} />
            </section>

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Preventive measures</Typography>
                <PreventiveMeasures measures={preventiveMeasures} />
            </section>
        </Container>
    )
}

export default Home;