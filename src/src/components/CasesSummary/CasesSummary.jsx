import React from 'react';

import styles from './CasesSummary.module.css';
import { getElapsedTime } from '../../utils';

import CountUp from 'react-countup';
import { Card, CardContent, CardHeader, Link, List, ListItem, Typography } from '@material-ui/core';

const CasesSummary = ({ location, data, sources, lastUpdate }) => {
    const elapsedTime = getElapsedTime(Date.now() - new Date(lastUpdate).getTime());

    return (
        <Card className="card" variant="outlined">
            <CardHeader title={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                <List className={styles.ul}>
                    {data?.map((item, i) =>
                        <ListItem key={i}>
                            <Typography variant="body2">{item.title}</Typography>
                            <CountUp start={item.total / 2} end={item.total} duration={1.5} separator="," className={styles.cases} />
                        </ListItem>
                    )}
                </List>

                <Typography variant="caption" color="textSecondary">
                    Updated less than {elapsedTime} ago - {sources?.length > 1 ? "Sources" : "Source"}:&nbsp;
                    {sources?.filter(item => item?.length === 2).map((item, i) =>
                        <Link key={i} href={item[1]} target="_blank" rel="noreferrer" color="inherit" underline="always">
                            {item[0]}
                        </Link>
                    )}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CasesSummary;