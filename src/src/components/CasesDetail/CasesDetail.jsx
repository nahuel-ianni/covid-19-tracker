import React from 'react';

import styles from './CasesDetail.module.css';
import { References } from '../';

import { Card, CardContent, CardHeader, List, ListItem, Typography } from '@material-ui/core';

const CasesDetail = ({ data, lastUpdate, location, sources }) => {
    return (
        <Card className="card" variant="outlined">
            <CardHeader title="Details" subheader={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                {
                    <List>
                        {data?.filter(x => x).map((item, i) =>
                            <ListItem key={i} className={styles.li}>
                                <Typography component="h3" variant="inherit">{item.title}</Typography>
                                <List>
                                    {item.extras?.filter(x => x).map((extra, x) =>
                                        <ListItem key={x} className={styles.li}>
                                            <Typography variant="body2">{extra}</Typography>
                                        </ListItem>
                                    )}
                                </List>
                            </ListItem>
                        )}
                    </List>
                }

                <References sources={sources} lastUpdate={lastUpdate} />
            </CardContent>
        </Card>
    );
}

export default CasesDetail;