import React from 'react';

import { Card, CardContent, Link } from '@material-ui/core';

const TwitterFeed = () => {
    return (
        <Card className="card" variant="outlined">
            <CardContent className="cardContent">
                <Link className="twitter-timeline" data-width="300" data-height="500" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</Link>
            </CardContent>
        </Card>
    );
}

export default TwitterFeed;