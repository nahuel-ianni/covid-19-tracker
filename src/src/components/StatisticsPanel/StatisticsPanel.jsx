import React, { useState, useEffect } from 'react';

import styles from './StatisticsPanel.module.css';
import { StatisticsCard } from '../../components';
import { GetCardValues } from '../../data/service';

const StatisticsPanel = (props) => {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const getData = async () => { setListItems(await GetCardValues()); }

        getData();
    }, []);

    return (
        <ul className={styles.ul}>
            {
                listItems.map((item, i) =>
                    <li key={i}>
                        <StatisticsCard title={item.title} total={item.total} new={item.new} img={item.img} type={item.type} />
                    </li>
                )
            }
        </ul>
    )
}

export default StatisticsPanel;