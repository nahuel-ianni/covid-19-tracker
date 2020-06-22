import React, { Fragment } from 'react';

import { SocialMediaLinks } from '../../components';

import { Typography } from '@material-ui/core';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Typography component="h1" variant="h3">COVID-19 Tracker</Typography>
                    <Typography component="p" variant="body1">- Stay safe -</Typography>
                </header>


                <footer>
                    <SocialMediaLinks />

                    <p>Made by Nahuel Ianni</p>
                    <p>Icons made by <a className="link" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a className="link" href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></p>
                </footer>
            </Fragment>
        )
    }
}

export default App;