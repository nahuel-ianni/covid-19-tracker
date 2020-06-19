import React from 'react';

import { ProtectiveMeasures, StatsSummary } from '../../components';
import { getSummaryAPI } from '../../api';

import Container from '@material-ui/core/Container';

class Main extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const summary = await getSummaryAPI();
        this.setState({ data: summary.Global });
    }

    render() {
        const { data } = this.state;

        return (
            <main>
                <Container>
                    <StatsSummary data={data} />
                    <ProtectiveMeasures />
                </Container>
            </main>
        )
    }
}

export default Main;