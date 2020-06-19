import React from 'react';

import Card from '@material-ui/core/Card';
import CountUp from 'react-countup';

import styles from './StatsSummary.module.css';


const StatsSummary = ({ data: { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }, lastUpdate }) => {
    const statistics = [
        {
            title: 'RECOVERED CASES',
            cases: Number(TotalRecovered),
            dailyDesc: 'RECOVERED (SINCE LAST UPDATE)',
            dailyCases: Number(NewRecovered)
        },
        {
            title: 'CONFIRMED CASES',
            cases: Number(TotalConfirmed),
            dailyDesc: 'CONFIRMED (SINCE LAST UPDATE)',
            dailyCases: Number(NewConfirmed)
        },
        {
            title: 'DEATHS',
            cases: Number(TotalDeaths),
            dailyDesc: 'DEATHS (SINCE LAST UPDATE)',
            dailyCases: Number(NewDeaths)
        },


        // { title: 'RECOVERED (SINCE LAST UPDATE)', cases: Number(NewRecovered) },
        // { title: 'CONFIRMED (SINCE LAST UPDATE)', cases: Number(NewConfirmed) },
        // { title: 'DEATHS (SINCE LAST UPDATE)', cases: Number(NewDeaths) },
    ];

    const listItems = statistics.map((item, i) =>
        <li key={i}>
            <Card className={styles.container}>
                <h3 className={styles.h3}>{item.title}</h3>
                <CountUp className={styles.cases} start={item.cases / 2} end={item.cases} duration={1.5} separator="," />

                <br/><br/><br/>

                <p>{item.dailyDesc}</p>
                <CountUp className={styles.cases} start={item.dailyCases / 2} end={item.dailyCases} duration={1.5} separator="," />
            </Card>
        </li>
    );

    return (
        <section>
            <h2>Global statistics</h2>

            <ul className={styles.ul}>
                {listItems}
            </ul>

            <p className="legend">Last updated: {new Date(lastUpdate).toDateString()}</p>
        </section>
    )
}

export default StatsSummary;