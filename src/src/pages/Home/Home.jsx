import React, { Fragment, useState, useEffect } from 'react';

import styles from './Home.module.css';
import { About, CasesSummary, CountryPicker, StatisticsMap, TwitterFeed } from '../../components';
import { GetCountries, GetDataByCountry } from '../../data/service';

import { Container } from '@material-ui/core';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const getCountries = async () => { setCountries(await GetCountries()); }
        const getSummaryData = async () => { setSummary(await GetDataByCountry()); }

        getCountries();
        getSummaryData();
    }, []);

    const handleCountryChange = async (country) => {
        setCountry(country);
        setSummary(await GetDataByCountry(country?.code));
    };

    return (
        <Fragment>
            <section>
                <StatisticsMap />
            </section>

            <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />

            <Container className={styles.container} maxWidth="md">
                <section>
                    <CasesSummary location={country.name} data={summary?.data} sources={summary?.sources} lastUpdate={summary?.lastUpdate} />

                    <article>TODO: Cases list</article>

                    <article>TODO: Chart</article>

                    <article>TODO: Preventive measures</article>

                    <About />
                </section>

                <section>
                    <article>TODO: News</article>

                    <TwitterFeed />
                </section>
            </Container>
        </Fragment>
    );
}

export default Home;