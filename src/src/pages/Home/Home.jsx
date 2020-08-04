import React, { Fragment, useState, useEffect } from 'react';

import styles from './Home.module.css';
import { About, CountryPicker, StatisticsMap, TwitterFeed } from '../../components';
import { GetCountries } from '../../data/service';

import { Container } from '@material-ui/core';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');

    useEffect(() => {
        const getCountries = async () => { setCountries(await GetCountries()); }

        getCountries();
    }, []);

    const handleCountryChange = async (country) => {
        console.log(country)
        setCountry(country?.Country);
    };

    return (
        <Fragment>
            <section>
                <StatisticsMap />
            </section>

            <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />

            <Container className={styles.container} maxWidth="md">
                <section>
                    <article>TODO: Cases info</article>

                    <article>TODO: Cases list</article>

                    <article>TODO: Chart</article>

                    <article>TODO: Preventive measures</article>

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