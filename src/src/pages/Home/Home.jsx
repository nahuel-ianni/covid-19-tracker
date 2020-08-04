import React, { Fragment } from 'react';

import styles from './Home.module.css';
import { About, StatisticsMap, TwitterFeed } from '../../components';

import { Container } from '@material-ui/core';

const Home = () => {
    return (
        <Fragment>
            <section>
                <StatisticsMap />
            </section>

            <Container className={styles.container} maxWidth="md">
                <section>
                    <article>TODO: Cases info</article>

                    <article>TODO: Cases list</article>

                    <article>TODO: Chart</article>

                    <article>
                        <About />
                    </article>
                </section>

                <section>
                    <article>TODO: News</article>

                    <article>
                        <TwitterFeed />
                    </article>
                </section>
            </Container>
        </Fragment>
    );
}

export default Home;