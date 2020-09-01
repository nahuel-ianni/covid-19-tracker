import React from 'react';

import styles from './CasesSummary.module.css';
import { References } from '../';
import { getPercentage } from '../../utils';

import CountUp from 'react-countup';
import { Card, CardContent, CardHeader, List, ListItem, Typography } from '@material-ui/core';

const CasesSummary = ({ location, data, sources, lastUpdate }) => {
    return (
        <Card className="card" variant="outlined">
            <CardHeader title={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                <List className={styles.ul}>
                    {data?.map((item, i) =>
                        <ListItem key={i}>
                            <Typography variant="body2">{item.title}</Typography>
                            <CountUp start={item.total / 2} end={item.total} duration={1.5} separator="," className={styles.cases} />

                            {item.new > 0 &&
                                <Typography variant="caption">Up {getPercentage(item.new, item.total)}% last 24h</Typography>
                            }
                        </ListItem>
                    )}
                </List>

                <References sources={sources} lastUpdate={lastUpdate} />
            </CardContent>
        </Card>
    );
}

export default CasesSummary;