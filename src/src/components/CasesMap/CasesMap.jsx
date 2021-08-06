import React, { Fragment } from 'react';

import styles from './CasesMap.module.css';

import { HeaderBackground } from '../../images';

const CasesMap = () => {
    return (
        <Fragment>
            <h2 className={styles.header}>Coronavirus (COVID-19)</h2>
            <div className={styles.imgContainer}>
                <img src={HeaderBackground} className={styles.img} alt="Map of Covid-19 cases across the globe" />
            </div>
        </Fragment>
    );
}

export default CasesMap;