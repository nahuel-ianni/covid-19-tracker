import React from 'react';

import styles from './CasesInfo.module.css';
import { getElapsedTime } from '../../utils';

import CountUp from 'react-countup';
import { Card, CardContent, CardHeader, Link, List, ListItem, Typography } from '@material-ui/core';

const CasesInfo = ({ location, data, lastUpdate }) => {
    const elapsedTime = getElapsedTime(Date.now() - new Date(lastUpdate).getTime());

    return (
        <Card className="card" variant="outlined">
            <CardHeader title={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                <List className={styles.ul}>
                    {data?.map((item, i) =>
                        <ListItem key={i}>
                            <Typography variant="body2">{item.title}</Typography>
                            <CountUp start={item.total / 2} end={item.total} duration={1.5} separator="," className={styles.cases}/>
                        </ListItem>
                    )}
                </List>

                <Typography variant="caption" color="textSecondary" className="legend">
                    Updated less than {elapsedTime} ago - Source:&nbsp;
                    <Link href="https://covid19api.com/" target="_blank" rel="noreferrer" color="inherit" underline="always">
                        Johns Hopkins CSSE
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CasesInfo;