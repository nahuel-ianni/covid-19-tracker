import React, { Fragment } from 'react';

import { Card, CardContent, CardHeader, Link, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ArgumentAxis, Chart, Legend, LineSeries, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const CasesOverTime = ({ location, data, sources }) => {
    const legendStyles = () => ({
        root: {
            display: 'flex',
            margin: 'auto',
            flexDirection: 'row',
        },
    });
    const legendLabelStyles = theme => ({
        label: {
            paddingTop: theme.spacing(1),
            whiteSpace: 'nowrap',
        },
    });
    const legendItemStyles = () => ({
        item: {
            flexDirection: 'column',
        },
    });

    const legendRootBase = ({ classes, ...restProps }) => <Legend.Root {...restProps} className={classes.root} />;
    const legendLabelBase = ({ classes, ...restProps }) => <Legend.Label className={classes.label} {...restProps} />;
    const legendItemBase = ({ classes, ...restProps }) => <Legend.Item className={classes.item} {...restProps} />;

    const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
    const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
    const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);

    const getChart = () => {
        return (
            <Chart data={data} height="250">
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries name="Confirmed" valueField="confirmed" argumentField="date" />
                <LineSeries name="Deaths" valueField="deaths" argumentField="date" />
                <LineSeries name="Recovered" valueField="recovered" argumentField="date" />
                <LineSeries name="Active" valueField="active" argumentField="date" />
                <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
            </Chart>
        )
    };

    const getSources = () => {
        return (
            <Typography variant="caption" color="textSecondary">
                {sources?.length > 1 ? "Sources" : "Source"}:&nbsp;
                {sources?.filter(item => item?.length === 2).map((item, i) =>
                    <Link key={i} href={item[1]} target="_blank" rel="noreferrer" color="inherit" underline="always">
                        {item[0]}
                    </Link>
                )}
            </Typography>
        )
    };

    return (
        <Card className="card" variant="outlined">
            <CardHeader title="Cases over time" subheader={location ?? 'Worldwide'} className="cardHeader" titleTypographyProps={{ component: "h2", variant: "inherit" }} />

            <CardContent className="cardContent">
                {data
                    ? (
                        <Fragment>
                            {getChart()}
                            {getSources()}
                        </Fragment>
                    )
                    : <Typography>- No data recorded -</Typography>
                }
            </CardContent>
        </Card>
    );
}

export default CasesOverTime;