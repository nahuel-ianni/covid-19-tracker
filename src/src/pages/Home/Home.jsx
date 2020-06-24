import React from 'react';

import { PreventiveMeasures, StatisticsPanel } from '../../components'
import { GetRecommendedMeasures } from '../../data/service';

import { Container, Typography } from '@material-ui/core';

const Home = () => {
    const preventiveMeasures = GetRecommendedMeasures();

    return (
        <Container>
            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Global stats</Typography>
                <StatisticsPanel />
            </section>

            {/* <section>
                ------- ACA VA UNA BARRA DE BUSQUEDA
                <Typography component="h2" variant="inherit" gutterBottom>PONER EL NOMBRE DEL PAIS, OCULTAR SI NO HAY PAIS SELECCIONADO</Typography>
                <StatisticsPanel />
            </section> */}

            <section>
                <Typography component="h2" variant="inherit" gutterBottom>Preventive measures</Typography>
                <PreventiveMeasures measures={preventiveMeasures} />
            </section>
        </Container>
    )
}

export default Home;