import React from 'react';

import { Card, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './StatsSummary.module.css';


const StatsSummary = ({ data: { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }, lastUpdate }) => {
    const statistics = [
        {
            title: 'RECOVERED CASES',
            // dailyDesc: 'RECOVERED (SINCE LAST UPDATE)',
            total: Number(TotalRecovered),
            daily: Number(NewRecovered)
        },
        {
            title: 'CONFIRMED CASES',
            // dailyDesc: 'CONFIRMED (SINCE LAST UPDATE)',
            total: Number(TotalConfirmed),
            daily: Number(NewConfirmed)
        },
        {
            title: 'DEATHS',
            // dailyDesc: 'DEATHS (SINCE LAST UPDATE)',
            total: Number(TotalDeaths),
            daily: Number(NewDeaths)
        },
    ];

    const listItems = statistics.map((item, i) =>
        <li key={i}>
            <Card className={styles.container}>
                {/* <CardHeader title={item.title} component="h3" variant="subtitle1" /> */}
                {/* <CardContent> */}
                    <Typography component="h3" variant="subtitle1">
                        {item.title}
                    </Typography>


                    <CountUp className={styles.cases} start={item.total / 2} end={item.total} duration={1.5} separator="," />

                    <br /><br />

                    <Typography component="p" variant="body2" color="textSecondary" gutterBottom>
                        {((item.daily / item.total) * 100).toFixed(2)}% in the past 24 hours
                    </Typography>

                    {/* <Typography component="p" variant="subtitle2" color="textSecondary" align="left">
                        Extended report
                    </Typography> */}

                    {/* <hr />

                    <Typography component="p" variant="body2" color="textSecondary" align="left">
                        
                    </Typography> */}
                {/* </CardContent> */}
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

            <Typography className="legend" component="p" color="textSecondary">
                Last updated: {new Date(lastUpdate).toDateString()}
            </Typography>
        </section>
    )
}

export default StatsSummary;