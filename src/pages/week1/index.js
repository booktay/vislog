import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const styles = theme => ({
    title: {
        paddingTop: '0.8em',
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    card: {
        minWidth: 275,
        marginBottom: '1em',
    },
});

const data = [
    { name: 'Mon', Visits: 2200, Orders: 3400 },
    { name: 'Tue', Visits: 1280, Orders: 2398 },
    { name: 'Wed', Visits: 5000, Orders: 4300 },
    { name: 'Thu', Visits: 4780, Orders: 2908 },
    { name: 'Fri', Visits: 5890, Orders: 4800 },
    { name: 'Sat', Visits: 4390, Orders: 3800 },
    { name: 'Sun', Visits: 4490, Orders: 4300 },
];

function ChartWk1(props) {
    const { classes } = props;

    return (
        <React.Fragment >
            <div className={classes.appBarSpacer} />
            <Card className={classes.card}>
                <Typography variant="headline" component="h2" align="center" color="inherit" noWrap className={classes.title}>
                    Thailand Domestic Internet Exchange Update on 07/2018
                </Typography>
                <CardContent>
                    <ResponsiveContainer width="99%" height={320}>
                        <LineChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <Typography variant="headline" component="h2" align="center" color="inherit" noWrap className={classes.title}>
                    Thailand International Internet Gateway Update on 07/2018
                </Typography>
                <CardContent>
                    <ResponsiveContainer width="99%" height={320}>
                        <LineChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </React.Fragment >
    );
}

ChartWk1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartWk1);