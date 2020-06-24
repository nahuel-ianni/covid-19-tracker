import React, { useState, useEffect } from 'react';

import styles from './StatisticsPanel.module.css';
import { StatisticsCard } from '../../components';
import { GetCardValues } from '../../data/service';

import { Typography } from '@material-ui/core';

const StatisticsPanel = (props) => {
    const [listItems, setListItems] = useState([]);

    const title = <Typography component="h2" variant="inherit" gutterBottom>Global stats</Typography>;
    const searchBar = 'IMPLEMENT SEARCH BAR HERE';

    const getHeaderContent = () => props?.restrict === "global" ? title : searchBar;

    useEffect(() => {
        const getData = async () => { setListItems(await GetCardValues()); }
        
        getData();
    }, []);

    return (
        <section>
            {getHeaderContent()}

            <ul className={styles.ul}>
                {
                    listItems.map((item, i) =>
                        <li key={i}>
                            <StatisticsCard title={item.title} total={item.total} img={item.img} type={item.type} />
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default StatisticsPanel;