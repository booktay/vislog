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

class ChartWk4 extends React.Component {

    getOption1 = () => {
        return {
            title: {
                text: '1. HTTP Request per minute graph',
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
                data: ["03:00", "03:01", "03:02", "03:03", "03:04", "03:05", "03:06", "03:07", "03:08", "03:09", "03:10", "03:11", "03:12", "03:13", "03:14", "03:15", "03:16", "03:17", "03:18", "03:19", "03:20", "03:21", "03:22", "03:23", "03:24", "03:25", "03:26", "03:27", "03:28", "03:29", "03:30", "03:31", "03:32", "03:33", "03:34", "03:35", "03:36", "03:37", "03:38", "03:39", "03:40", "03:41", "03:42", "03:43", "03:44", "03:45", "03:46", "03:47", "03:48", "03:49", "03:50", "03:51", "03:52", "03:53", "03:54", "03:55", "03:56", "03:57", "03:58", "03:59"],
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
                    color: 'green'
                }]
            },
            series: [
                {
                    name: 'User',
                    type: 'line',
                    smooth: true,
                    data: [5790, 5193, 6195, 5829, 5839, 6253, 5736, 8454, 5447, 5235, 5630, 6138, 5411, 5510, 5101, 5587, 5701, 5527, 5241, 5000, 5205, 4925, 4179, 4649, 4481, 4882, 4856, 4798, 4688, 4739, 4755, 4768, 4452, 4509, 4336, 4049, 3412, 3262, 3340, 3612, 3041, 3071, 3001, 3136, 3156, 3166, 2962, 3193, 3107, 3032, 2614, 2772, 2687, 2664, 2663, 2707, 2667, 2977, 2941, 2564]
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

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment >
                <Card className={classes.card}>
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
            </React.Fragment >
        );
    }
}

ChartWk4.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartWk4);