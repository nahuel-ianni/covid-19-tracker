import React, { Fragment } from 'react';

import styles from './StatisticsMap.module.css';
import { HeaderBackground } from '../../images';

const StatisticsMap = () => {
    return (
        <Fragment>
            <h2 className={styles.header}>Coronavirus (COVID-19)</h2>
            
            <img src={HeaderBackground} alt="Map of Covid-19 cases across the globe" />
        </Fragment>
    );
}

export default StatisticsMap;