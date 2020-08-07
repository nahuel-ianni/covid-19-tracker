import React from 'react';

import { Card, CardContent, CardHeader, Link, Typography } from '@material-ui/core';

const CasesOverTime = ({ location }) => {
    return (
        <Card className="card" variant="outlined">
            <CardHeader title="Cases over time" subheader={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                {/* <List className={styles.ul}>
                    {data?.map((item, i) =>
                        <ListItem key={i}>
                            <Typography variant="body2">{item.title}</Typography>
                            <CountUp start={item.total / 2} end={item.total} duration={1.5} separator="," className={styles.cases} />
                        </ListItem>
                    )}
                </List> */}

                {/* <Typography variant="caption" color="textSecondary">
                    Updated less than {elapsedTime} ago - Source:&nbsp;
                    {sources?.filter(item => item?.length === 2).map((item) =>
                        <Link href={item[1]} target="_blank" rel="noreferrer" color="inherit" underline="always">
                            {item[0]}
                        </Link>
                    )}
                </Typography> */}
            </CardContent>
        </Card>
    );
}

export default CasesOverTime;