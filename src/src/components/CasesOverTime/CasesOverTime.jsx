import React, { Fragment } from 'react';

import { LineChart, References } from '../';

import { Card, CardContent, CardHeader, Link, Typography } from '@material-ui/core';

const CasesOverTime = ({ location, data, sources }) => {
    return (
        <Card className="card" variant="outlined">
            <CardHeader title="Cases over time" subheader={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                {data
                    ? (
                        <Fragment>
                            <LineChart data={data} />

                            <References sources={sources} />
                        </Fragment>
                    )
                    : <Typography>- No data recorded -</Typography>
                }
            </CardContent>
        </Card>
    );
}

export default CasesOverTime;