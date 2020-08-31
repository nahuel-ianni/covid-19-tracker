import React from 'react';

import styles from './PreventiveMeasures.module.css';

import { References } from '../';

import { Card, CardContent, CardHeader, List, ListItem, Typography } from '@material-ui/core';

const PreventiveMeasures = ({ data, lastUpdate, sources }) => {
    const listItems = data?.map((item, i) =>
        <ListItem key={i} className={styles.li}>
            <Typography component="h3" variant="inherit">{item.title}</Typography>
            <Typography variant="body2">{item.content}</Typography>
        </ListItem>
    );

    return (
        <Card className="card" variant="outlined">
            <CardHeader title="Preventive measures" className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                <List>
                    {listItems}
                </List>

                <References sources={sources} lastUpdate={lastUpdate} />
            </CardContent>
        </Card>
    )
}

export default PreventiveMeasures;