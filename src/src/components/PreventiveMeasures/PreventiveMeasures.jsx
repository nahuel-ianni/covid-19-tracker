import React, { Fragment } from 'react';

import styles from './PreventiveMeasures.module.css';

import { Card, CardContent, Link, List, ListItem, Typography } from '@material-ui/core';

const PreventiveMeasures = (props) => {
    const listItems = props.measures.map((item, i) =>
        <ListItem key={i}>
            <img src={item.img} className={styles.img} alt={item.img_desc} />
            <div>
                <Typography component="h3" variant="inherit">{item.title}</Typography>
                <Typography>{item.content}</Typography>
            </div>
        </ListItem>
    );

    return (
        <Fragment>
            <Card>
                <CardContent>
                    <List className={styles.ul}>
                        {listItems}
                    </List>
                </CardContent>
            </Card>

            <Typography component="p" className="legend" align="center">
                <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer" color="textSecondary">
                    Source: World Health Organization
                </Link>
            </Typography>
        </Fragment>
    )
}

export default PreventiveMeasures;