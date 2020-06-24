import React from 'react';

import { PreventiveMeasures, StatisticsPanel } from '../../components'
import { RecommendedMeasures } from '../../data/static';

import { Container, Typography } from '@material-ui/core';

const Home = () => {
    return (
        <Container>
            <StatisticsPanel restrict="global" />
            <StatisticsPanel />

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>
                    Preventive measures
                </Typography>

                <PreventiveMeasures measures={RecommendedMeasures} />
            </section>
        </Container>
    )
}

export default Home;