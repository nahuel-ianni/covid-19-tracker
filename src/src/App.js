import React, { Fragment } from 'react';

import styles from './App.module.css';
import { Home } from './pages';
import { AuthorLinks } from './components';
import { RedVirusSvg } from './images';

import { Typography } from '@material-ui/core';

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Typography component="h1" variant="inherit">
                        C<img src={RedVirusSvg} className={styles.virus} alt="Covid-19 virus drawing" />VID-19 Tracker
                    </Typography>
                    <Typography variant="body2">- Stay safe -</Typography>
                </header>

                <main>
                    <Home />
                </main>

                <footer>
                    <AuthorLinks />

                    <Typography gutterBottom>Made by Nahuel Ianni</Typography>
                    <Typography>Icons made by <a className={styles.a} href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a className={styles.a} href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></Typography>
                </footer>
            </Fragment>
        )
    }
}