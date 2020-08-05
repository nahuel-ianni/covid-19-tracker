import React from 'react';

import { Card, CardContent, CardHeader, Link } from '@material-ui/core';

const CasesInfo = ({location}) => {
    return (
        <Card className="card" variant="outlined">
            <CardHeader title={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                
            </CardContent>
        </Card>
    );
}

export default CasesInfo;