import React from 'react';

import styles from './StatisticsPanel.module.css';
import { StatisticsCard } from '../../components';
import { CardValues } from '../../data/service';

import { Typography } from '@material-ui/core';

const StatisticsPanel = (props) => {
    const title = <Typography component="h2" variant="inherit" gutterBottom>Global</Typography>;
    const searchBar = 'IMPLEMENT SEARCH BAR HERE';

    const getHeaderContent = () => {
        return props?.restrict === "global"
            ? title
            : searchBar;
    }

    const listItems = CardValues.map((item, i) =>
        <li key={i}>
            <StatisticsCard title={item.title} value={item.value} img={item.img} type={item.type} />
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