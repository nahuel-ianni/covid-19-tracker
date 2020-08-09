import React, { Fragment } from 'react';

import { LineChart } from "../";
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

                            <Typography variant="caption" color="textSecondary">
                                {sources?.length > 1 ? "Sources" : "Source"}:&nbsp;
                                {sources?.filter(item => item?.length === 2).map((item, i) =>
                                    <Link key={i} href={item[1]} target="_blank" rel="noreferrer" color="inherit" underline="always">
                                        {item[0]}
                                    </Link>
                                )}
                            </Typography>
                        </Fragment>
                    )
                    : <Typography>- No data recorded -</Typography>
                }
            </CardContent>
        </Card>
    );
}

export default CasesOverTime;