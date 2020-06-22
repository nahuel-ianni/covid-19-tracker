import React, { Fragment } from 'react';

import { AuthorLinks } from '../../components';
import { Typography } from '@material-ui/core';

import { RedVirusSvg } from '../../images';
import styles from './App.module.css';

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Typography component="h1" variant="h3">
                        C<img src={RedVirusSvg} className={styles.virus} alt="Covid-19 virus drawing" />VID-19 Tracker
                        </Typography>
                    <Typography component="p" variant="body1">- Stay safe -</Typography>
                </header>

                <main>
                    CONTENT GOES HERE
                </main>

                <footer>
                    <AuthorLinks />

                    <Typography component="p" gutterBottom>Made by Nahuel Ianni</Typography>
                    <Typography component="p">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></Typography>
                </footer>
            </Fragment>
        )
    }
}