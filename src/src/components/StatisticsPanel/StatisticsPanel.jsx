import React from 'react';

import styles from './StatisticsPanel.module.css';
import { StatisticsCard } from '../../components'

import { Typography } from '@material-ui/core';

const StatisticsPanel = (props) => {
    const title = <Typography component="h2" variant="inherit" gutterBottom>Global</Typography>;
    const searchBar = null;

    const getHeaderContent = () => {
        return props?.restrict === "global"
            ? title
            : searchBar;
    }

    const listItems = [1, 2, 3].map((item, i) =>
        <li key={i}>
            <StatisticsCard />
            {/* <img src={item.img} className={styles.img} alt={item.img_desc} />
            <div>
                <Typography component="h3" variant="inherit">{item.title}</Typography>
                <Typography>{item.content}</Typography>
            </div> */}
        </li>
    );

    return (
        <section>
            {getHeaderContent()}

            <ul className={styles.ul}>
                {listItems}
            </ul>
        </section>
    )
}

export default StatisticsPanel;