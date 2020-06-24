import React from 'react';

import { PreventiveMeasures, StatisticsPanel } from '../../components'

import { Container } from '@material-ui/core';

const Home = () => {
    return (
        <Container>
            <StatisticsPanel restrict="global"/>
            <StatisticsPanel />
            <PreventiveMeasures />
        </Container>
    )
}

export default Home;