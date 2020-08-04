import React from 'react';

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

const About = () => {
    return (
        <Card className="card" variant="outlined">
            <CardHeader title="About this data" className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                <Typography component="h3" variant="inherit">It changes rapidly</Typography>
                <Typography>This data changes rapidly and might not reflect some cases still being reported.</Typography>

                <Typography component="h3" variant="inherit">It only includes people tested</Typography>
                <Typography>Cases only include people who were tested and confirmed positive. Testing rules and availability vary by country. Some areas may not have data because they haven’t published their data or haven’t done so recently.</Typography>

                <Typography component="h3" variant="inherit">Why do I see different data from different sources?</Typography>
                <Typography>There are various sources that are tracking and aggregating coronavirus data. They update at different times and may have different ways of gathering data.</Typography>
            </CardContent>
        </Card>
    );
}

export default About;