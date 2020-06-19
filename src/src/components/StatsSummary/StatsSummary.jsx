import React from 'react';

import { Card, Typography } from '@material-ui/core';
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
    ];

    const listItems = statistics.map((item, i) =>
        <li key={i}>
            <Card className={styles.container}>
                <Typography component="h3" variant="subtitle1">
                    {item.title}
                </Typography>

                <CountUp className={styles.cases} start={item.cases / 2} end={item.cases} duration={1.5} separator="," />

                <br /><br />

                <Typography component="p" variant="subtitle2" color="textSecondary">
                    {item.dailyDesc}
                </Typography>

                <CountUp className={styles.cases} start={item.dailyCases / 2} end={item.dailyCases} duration={1.5} separator="," />
            </Card>
        </li>
    );

    return (
        <section>
            <Typography component="h2" variant="h4" gutterBottom>
                Global statistics
            </Typography>

            <ul className={styles.ul}>
                {listItems}
            </ul>

            <Typography className="legend" component="p">
                Last updated: {new Date(lastUpdate).toDateString()}
            </Typography>
        </section>
    )
}

export default StatsSummary;