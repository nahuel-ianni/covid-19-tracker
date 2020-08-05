import React from 'react';

import { Card, CardContent, CardHeader, Link, Typography } from '@material-ui/core';

const CasesInfo = ({ location }) => {
    return (
        <Card className="card" variant="outlined">
            <CardHeader title={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">

                <Typography variant="caption" color="textSecondary">
                    Updated less than 1 hour ago - Source:&nbsp;
                    <Link href="https://covid19api.com/" target="_blank" rel="noreferrer" color="textSecondary" underline="always">
                        Johns Hopkins CSSE
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CasesInfo;