import React from 'react';

import Card from '@material-ui/core/Card';
import CountUp from 'react-countup';

import styles from './StatsSummary.module.css';


const StatsSummary = ({ data: { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } }) => {
    const statistics = [
        ['CONFIRMED CASES', TotalConfirmed],
        ['RECOVERED CASES', TotalRecovered],
        ['DEATHS', TotalDeaths],
        ['NEW CASES', NewConfirmed],
        ['NEW RECOVERED', NewRecovered],
        ['NEW DEATHS', NewDeaths],
    ];

    const listItems = statistics.map(([title, cases], i) => {
        cases = Number(cases);

        return (
            <li key={i}>
                <Card className={styles.container}>
                    <h3 className={styles.h3}>{title}</h3>
                    <CountUp className={styles.value} start={cases / 2} end={cases} duration={1.5} separator="," />
                </Card>
            </li>
        )
    });

    return (
        <section>
            <h2>Global statistics</h2>

            <ul className={styles.ul}>
                {listItems}
            </ul>
        </section>
    )
}

export default StatsSummary;