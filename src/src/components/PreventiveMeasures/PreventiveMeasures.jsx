import React from 'react';

import styles from './PreventiveMeasures.module.css';
import { RecommendedMeasures } from '../../data/static';

import { Card, CardContent, Link, Typography } from '@material-ui/core';

const PreventiveMeasures = () => {
    const listItems = RecommendedMeasures.map((item, i) =>
        <li key={i}>
            <img src={item.img} className={styles.img} alt={item.img_desc} />
            <div>
                <Typography component="h3" variant="inherit">{item.title}</Typography>
                <Typography component="p" variant="inherit">{item.content}</Typography>
            </div>
        </li>
    );

    return (
        <section>
            <Typography component="h2" variant="inherit" gutterBottom>
                Preventive measures
            </Typography>

            <Card>
                <CardContent>
                    <ul className={styles.ul}>
                        {listItems}
                    </ul>
                </CardContent>
            </Card>

            <Typography component="p" className="legend">
                <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer" color="textSecondary">
                    Source: World Health Organization
                </Link>
            </Typography>
        </section>
    )
}

export default PreventiveMeasures;