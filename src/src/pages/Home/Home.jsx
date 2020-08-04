import React, { Fragment } from 'react';

import { About, StatisticsMap } from '../../components';

const Home = () => {
    return (
        <Fragment>
            <section>
                <StatisticsMap />
            </section>

            <section>TODO: Cases info</section>

            <section>TODO: Cases list</section>

            <section>TODO: Chart</section>

            <section>TODO: News</section>

            <section>TODO: Twitter feed?</section>

            <section>
                <About />
            </section>
        </Fragment>
    );
}

export default Home;