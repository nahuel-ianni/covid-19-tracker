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
                <div>
                    <section>
                        <CasesSummary location={country.name} data={summary?.data} sources={summary?.sources} lastUpdate={summary?.lastUpdate} />
                    </section>

                    <section>
                        <CasesOverTime location={country.name} data={casesOverTime?.data} sources={casesOverTime?.sources} />
                    </section>

                    {/* 
                        TODO: Cases list
                        TODO: Chart
                        TODO: Preventive measures
                    */}
                    
                    <section>
                        <About />
                    </section>
                </div>

                <div>
                    {/* 
                        TODO: News
                    */}

                    <section>
                        <TwitterFeed />
                    </section>
                </div>
            </Container>
        </Fragment>
    );
}

export default Home;