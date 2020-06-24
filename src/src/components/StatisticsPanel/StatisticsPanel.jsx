import React from 'react';

import styles from './StatisticsPanel.module.css';
import { StatisticsCard } from '../../components';

const StatisticsPanel = (props) => {
    return (
        <ul className={styles.ul}>
            {
                props.values.map((item, i) =>
                    <li key={i}>
                        <StatisticsCard title={item.title} total={item.total} new={item.new} img={item.img} type={item.type} />
                    </li>
                )
            }
        </ul>
    )
}

export default StatisticsPanel;