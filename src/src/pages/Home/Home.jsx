import React, { Fragment, useState, useEffect } from 'react';

import styles from './Home.module.css';
import { About, CasesMap, CasesOverTime, CasesSummary, CountryPicker, TwitterFeed } from '../../components';
import { GetCountries, GetDataByCountry, GetHistoryByCountry } from '../../data/service';

import { Container } from '@material-ui/core';

const Home = () => {
    const [casesOverTime, setCasesOverTime] = useState([]);
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

        setCasesOverTime(await GetHistoryByCountry(country?.code));
        setSummary(await GetDataByCountry(country?.code));
    };

    return (
        <Fragment>
            <section>
                <CasesMap />
            </section>

            <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />

            <Container className={styles.container} maxWidth="md">
                <section>
                    <CasesSummary location={country.name} data={summary?.data} sources={summary?.sources} lastUpdate={summary?.lastUpdate} />

                    {country &&
                        <CasesOverTime location={country.name} data={casesOverTime?.data} sources={casesOverTime?.sources} />
                    }

                    <div className="desktop">
                        <About />
                    </div>
                </section>

                <section>
                    <TwitterFeed />
                </section>

                <section className="mobile">
                    <About />
                </section>
            </Container>
        </Fragment>
    );
}

export default Home;