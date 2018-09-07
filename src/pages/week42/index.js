import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactEcharts from 'echarts-for-react';

import data_4 from './data33.json';
import data_5 from './data34.json';
import data_6 from './data35.json';
import data_7 from './data36.json';


const styles = theme => ({
    title: {
        paddingTop: '0.5em',
        flexGrow: 1,
    },
    card: {
        minWidth: 275,
        marginBottom: '1em',
    },
});

class ChartWk4 extends React.Component {

    getOption4 = () => {
        return {
            title: {
                text: 'HTTP Egress request all hostname',
                left: 'left'
            },

            series: [{
                type: 'treemap',
                data: data_4
            }]
        };
    }

    getOption5 = () => {
        return {
            title: {
                text: 'HTTP Ingress request all hostname',
                left: 'left'
            },

            series: [{
                type: 'treemap',
                data: data_5
            }]
        };
    }

    getOption6 = () => {
        return {
            title: {
                text: 'HTTP Egress filetype',
                left: 'left'
            },

            series: [{
                type: 'treemap',
                data: data_6
            }]
        };
    }

    getOption7 = () => {
        return {
            title: {
                text: 'HTTP Ingress filetype',
                left: 'left'
            },

            series: [{
                type: 'treemap',
                data: data_7
            }]
        };
    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment >
                <Card className={classes.card}>
                    <CardContent>
                        <ReactEcharts option={this.getOption4()} style={{ height: '34em', width: '100%' }} />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <ReactEcharts option={this.getOption5()} style={{ height: '34em', width: '100%' }} />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <ReactEcharts option={this.getOption6()} style={{ height: '34em', width: '100%' }} />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <ReactEcharts option={this.getOption7()} style={{ height: '34em', width: '100%' }} />
                    </CardContent>
                </Card>
            </React.Fragment >
        );
    }
}

ChartWk4.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartWk4);