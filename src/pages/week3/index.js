import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactEcharts from 'echarts-for-react';

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

class ChartWk1 extends React.Component {

    getOption1 = () => {
        return {
            title: {
                text: '1. Users in use per hour, day graph',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2016/12/20 21:00', '2016/12/31 20:00', '2017/01/01 12:00',
                    '2017/01/01 13:00', '2017/01/01 14:00', '2017/01/01 15:00',
                    '2017/01/01 16:00', '2017/01/01 20:00', '2017/01/01 21:00',
                    '2017/01/01 22:00', '2017/01/01 23:00', '2017/01/02 00:00',
                    '2017/01/02 01:00', '2017/01/02 02:00', '2017/01/02 03:00',
                    '2017/01/02 04:00', '2017/01/02 05:00', '2017/01/02 06:00',
                    '2017/01/02 07:00', '2017/01/02 08:00', '2017/01/02 09:00',
                    '2017/01/02 10:00', '2017/01/02 11:00', '2017/01/02 12:00',
                    '2017/01/02 13:00', '2017/01/02 14:00', '2017/01/02 15:00',
                    '2017/01/02 16:00', '2017/01/02 17:00', '2017/01/02 18:00',
                    '2017/01/02 19:00', '2017/01/02 20:00', '2017/01/02 21:00',
                    '2017/01/02 22:00', '2017/01/02 23:00']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} Users'
                },
                axisPointer: {
                    snap: true
                }
            },
            visualMap: {
                show: false,
                dimension: 0,
                pieces: [{
                    lte: 6,
                    color: 'green'
                }, {
                    gt: 6,
                    lte: 8,
                    color: 'red'
                }, {
                    gt: 8,
                    lte: 14,
                    color: 'green'
                }, {
                    gt: 14,
                    lte: 17,
                    color: 'red'
                }, {
                    gt: 17,
                    color: 'green'
                }]
            },
            series: [
                {
                    name: 'User',
                    type: 'line',
                    smooth: true,
                    data: [1, 1, 1, 1, 2, 1, 3, 3, 1, 6, 44, 144, 74,
                        38, 40, 26, 48, 115, 178, 368, 432, 426, 462, 539, 416, 524,
                        410, 388, 325, 417, 476, 399, 394, 272, 162],
                }
            ]
        };
    };

    getOption2 = () => {
        return {
            title: {
                text: '2. IP usage per hour graph'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['IPv4', 'IPv6', 'Dual Stack']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2016/12/20 21:00', '2016/12/31 20:00', '2017/01/01 12:00',
                    '2017/01/01 13:00', '2017/01/01 14:00', '2017/01/01 15:00',
                    '2017/01/01 16:00', '2017/01/01 20:00', '2017/01/01 21:00',
                    '2017/01/01 22:00', '2017/01/01 23:00', '2017/01/02 00:00',
                    '2017/01/02 01:00', '2017/01/02 02:00', '2017/01/02 03:00',
                    '2017/01/02 04:00', '2017/01/02 05:00', '2017/01/02 06:00',
                    '2017/01/02 07:00', '2017/01/02 08:00', '2017/01/02 09:00',
                    '2017/01/02 10:00', '2017/01/02 11:00', '2017/01/02 12:00',
                    '2017/01/02 13:00', '2017/01/02 14:00', '2017/01/02 15:00',
                    '2017/01/02 16:00', '2017/01/02 17:00', '2017/01/02 18:00',
                    '2017/01/02 19:00', '2017/01/02 20:00', '2017/01/02 21:00',
                    '2017/01/02 22:00', '2017/01/02 23:00']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'IPv4',
                    type: 'line',
                    data: [0, 1, 1, 0, 1, 1, 1, 1, 1, 3, 25, 76, 34, 18, 22, 18, 18, 64, 106, 240, 246, 248, 243, 316, 246, 250, 240, 195, 192, 218, 278, 229, 231, 151, 86]
                },
                {
                    name: 'IPv6',
                    type: 'line',
                    stack: '总量',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0]
                },
                {
                    name: 'Dual Stack',
                    type: 'line',
                    stack: '总量',
                    data: [1, 0, 0, 1, 1, 0, 2, 2, 0, 3, 19, 68, 40, 20, 18, 8, 30, 51, 72, 128, 184, 176, 219, 223, 170, 274, 166, 193, 133, 199, 196, 170, 163, 121, 76]
                }
            ]
        };
    };

    getOption3 = () => {
        return {
            title: {
                text: '3. IP usage chart'
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['IPv4', 'IPv6', 'Dual Stack']
            },
            series: [
                {
                    name: 'IP Usages',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 1320, name: 'IPv4' },
                        { value: 5, name: 'IPv6' },
                        { value: 1132, name: 'Dual Stack' }
                    ]
                }
            ]
        };
    }

    getOption4 = () => {
        return {
            title: {
                text: '4. Login/Logout Timestamp Graph'
            },
            brush: {
                toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                xAxisIndex: 0
            },
            tooltip: {},
            xAxis: {
                data: ['2016/12/20 21:00', '2016/12/31 20:00', '2017/01/01 12:00',
                    '2017/01/01 13:00', '2017/01/01 14:00', '2017/01/01 15:00',
                    '2017/01/01 16:00', '2017/01/01 20:00', '2017/01/01 21:00',
                    '2017/01/01 22:00', '2017/01/01 23:00', '2017/01/02 00:00',
                    '2017/01/02 01:00', '2017/01/02 02:00', '2017/01/02 03:00',
                    '2017/01/02 04:00', '2017/01/02 05:00', '2017/01/02 06:00',
                    '2017/01/02 07:00', '2017/01/02 08:00', '2017/01/02 09:00',
                    '2017/01/02 10:00', '2017/01/02 11:00', '2017/01/02 12:00',
                    '2017/01/02 13:00', '2017/01/02 14:00', '2017/01/02 15:00',
                    '2017/01/02 16:00', '2017/01/02 17:00', '2017/01/02 18:00',
                    '2017/01/02 19:00', '2017/01/02 20:00', '2017/01/02 21:00',
                    '2017/01/02 22:00', '2017/01/02 23:00'],
                name: 'X Axis',
                silent: false,
                axisLine: { onZero: true },
                splitLine: { show: false },
                splitArea: { show: false }
            },
            yAxis: {
                inverse: false,
                splitArea: { show: false }
            },
            grid: {
                left: 100
            },
            series: [
                {
                    name: 'login',
                    type: 'bar',
                    stack: 'one',
                    data: [1, 1, 1, 1, 2, 1, 3, 3, 1, 6, 44, 144, 74, 38, 40, 26, 48, 115, 178, 368, 432, 426, 462, 539, 416, 524, 410, 388, 325, 417, 476, 399, 394, 272, 162]
                },
                {
                    name: 'logout',
                    type: 'bar',
                    stack: 'one',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -86, -61, -31, -16, -17, -17, -42, -73, -125, -201, -225, -198, -273, -225, -234, -234, -207, -168, -200, -216, -222, -204, -172, -116]
                }
            ]
        };
    }

    getOption5 = () => {
        return {
            title: {
                text: '5. Agent IP (::ffff:158.108.218.XXX) Distribution Graph'
            },
            angleAxis: {
                type: 'category',
                data: ['.201', '.202',
                    '.203', '.204',
                    '.205', '.206',
                    '.207', '.208',
                    '.209', '.210',
                    '.211', '.212'],
                z: 700
            },
            radiusAxis: {
            },
            polar: {
            },
            tooltip: {
                trigger: 'item',
                formatter: "::ffff:158.108.218{b}: {c} users"
            },
            series: [{
                type: 'bar',
                data: [644, 643, 553, 665, 570, 570, 589, 567, 548, 592, 523, 673],
                coordinateSystem: 'polar',
            }]
        };
    }

    getOption6 = () => {
        return {
            angleAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                z: 10
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a'
            }, {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
            }, {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a'
            }],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment >
                <Card className={classes.card}>
                    {/* <Typography variant="headline" component="h2" align="center" color="inherit" noWrap className={classes.title}>
                        1. Users in use per hour, day graph
                    </Typography> */}
                    <CardContent>
                        <ReactEcharts option={this.getOption1()} style={{ height: '34em', width: '100%' }} />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <ReactEcharts option={this.getOption2()} style={{ height: '34em', width: '100%' }} />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <ReactEcharts option={this.getOption3()} style={{ height: '34em', width: '100%' }} />
                    </CardContent>
                </Card>
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
            </React.Fragment >
        );
    }
}

ChartWk1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartWk1);