import React from 'react';

import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <header>
            <Typography component="h1" variant="h3">COVID-19 Tracker</Typography>
            <Typography component="p" variant="body1">- Stay safe -</Typography>
        </header>
    );
}

export default Header;