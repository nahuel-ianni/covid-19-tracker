import React, { Fragment, useState, useEffect } from 'react';

import styles from './Home.module.css';
import { About, CasesDetail, CasesMap, CasesOverTime, CasesSummary, CountryPicker, PreventiveMeasures, TwitterFeed } from '../../components';
import { GetCountries, GetDataByCountry, GetHistoryByCountry, GetPreventiveMeasures } from '../../data/service';

import { Container } from '@material-ui/core';

const Home = () => {
    const [casesOverTime, setCasesOverTime] = useState([]);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');
    const [preventiveMeasures, setPreventiveMeasures] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const getCountries = async () => { setCountries(await GetCountries()); }
        const getPreventiveMeasures = async () => { setPreventiveMeasures(await GetPreventiveMeasures()); }

        getCountries();
        getPreventiveMeasures();
    }, []);

    useEffect(() => {
        const getSummaryData = async () => { setSummary(await GetDataByCountry(country?.code)); }

        getSummaryData();
    }, [country]);

    useEffect(() => {
        const getCasesOverTime = async () => { setCasesOverTime(await GetHistoryByCountry(country?.code)); }

        getCasesOverTime();
    }, [country]);

    const handleCountryChange = async (country) => setCountry(country);

    return (
        <Fragment>
            <section>
                <CasesMap />
            </section>

            <article className={styles.picker}>
                <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />
            </article>

            <Container className={styles.container}>
                <section>
                    <CasesSummary location={country.name} data={summary?.data} sources={summary?.sources} lastUpdate={summary?.lastUpdate} />

                    <CasesDetail location={country.name} data={summary?.data} sources={summary?.sources} lastUpdate={summary?.lastUpdate} />

                    {country && casesOverTime?.data?.length > 0 &&
                        <CasesOverTime location={country.name} data={casesOverTime?.data} sources={casesOverTime?.sources} />
                    }

                    {/* <PreventiveMeasures data={preventiveMeasures.data} sources={preventiveMeasures.sources} lastUpdate={preventiveMeasures.lastUpdate} /> */}
                </section>

                <section>
                    <TwitterFeed />
                    <About />
                </section>
            </Container>
        </Fragment>
    );
}

export default Home;