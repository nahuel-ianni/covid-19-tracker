import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { ArgumentAxis, Chart, Legend, LineSeries, Tooltip, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

const LineChart = ({ data }) => {
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

    const root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
    const label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
    const item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);

    return (
        <Chart data={data} height="250">
            <ValueAxis />
            <ArgumentAxis>
                <Label rotationAngle={45} overlappingBehavior="rotate" />
            </ArgumentAxis>

            <LineSeries name="Confirmed" valueField="confirmed" argumentField="date" />
            <LineSeries name="Deaths" valueField="deaths" argumentField="date" />
            <LineSeries name="Recovered" valueField="recovered" argumentField="date" />
            <LineSeries name="Active" valueField="active" argumentField="date" />

            <Legend position="bottom" rootComponent={root} itemComponent={item} labelComponent={label} />

            <EventTracker />
            <Tooltip />
        </Chart>
    );
}

export default LineChart;