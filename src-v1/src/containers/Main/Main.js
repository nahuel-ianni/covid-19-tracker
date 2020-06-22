import React from 'react';

import { ProtectiveMeasures, StatsSummary } from '../../components';
import { getSummaryAPI } from '../../api';

import Container from '@material-ui/core/Container';

class Main extends React.Component {
    state = {
        data: {},
        lastUpdate: '',
    }

    async componentDidMount() {
        const summary = await getSummaryAPI();
        this.setState(
            { 
                data: summary.Global ,
                lastUpdate: summary.Date,
            });
    }

    render() {
        const { data, lastUpdate } = this.state;

        return (
            <main>
                <Container>
                    <StatsSummary data={data} lastUpdate={lastUpdate} />
                    <ProtectiveMeasures />
                </Container>
            </main>
        )
    }
}

export default Main;