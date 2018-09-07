import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import data_2 from './data31_2.json';

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
                text: 'HTTP Request Timestamps',
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
                boundaryGap: true,
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
            dataZoom: [{
                type: 'inside',
                start: 6,
                end: 12
            }, {
                start: 6,
                end: 12,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name: 'User',
                    type: 'bar',
                    smooth: true,
                    symbol: 'none',
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                        ]
                    },
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            // color: 'rgb(255, 70, 131)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(68, 186, 255)'
                            }, {
                                offset: 1,
                                color: 'rgb(47, 100, 206)'
                            }])
                        }
                    },
                    data: [5790, 5193, 6195, 5829, 5839, 6253, 5736, 8454, 5447, 5235, 5630, 6138, 5411, 5510, 5101, 5587, 5701, 5527, 5241, 5000, 5205, 4925, 4179, 4649, 4481, 4882, 4856, 4798, 4688, 4739, 4755, 4768, 4452, 4509, 4336, 4049, 3412, 3262, 3340, 3612, 3041, 3071, 3001, 3136, 3156, 3166, 2962, 3193, 3107, 3032, 2614, 2772, 2687, 2664, 2663, 2707, 2667, 2977, 2941, 2564]
                }
            ]
        };
    };

    getOption2 = () => {
        return {
            title: {
                text: 'All user request',
                left: 'left'
            },
            series: [{
                type: 'treemap',
                data: data_2
            }]
        };
    };

    getOption3 = () => {
        return {
            title: {
                text: 'All request of Topmost user at 03.00AM',
                left: 'left'
            },
            parallelAxis: [
                {
                    dim: 0,
                    name: 'Time',
                    type: 'category',
                    data: ['03:00:21', '03:00:29', '03:00:13', '03:00:14', '03:00:11', '03:00:28', '03:00:27', '03:00:16', '03:00:12']
                },
                {
                    dim: 1,
                    name: 'Username',
                    type: 'category',
                    data: ['RMUn6owxz3Npjow@ku.ac.th']
                },
                {
                    dim: 2,
                    name: 'IP Src',
                    type: 'category',
                    data: ['158.108.230.26']
                },
                {
                    dim: 3,
                    name: 'IP Dst',
                    type: 'category',
                    data: ['104.90.236.53', '23.209.180.9', '203.104.175.37', '114.111.45.205', '23.209.180.8']
                },
                {
                    dim: 4,
                    name: 'Port Dst',
                    type: 'category',
                    data: ['80'],
                },
                {
                    dim: 5,
                    name: 'Hostname',
                    type: 'category',
                    data: ['webtoon.phinf.naver.net', 'static.cbox.naver.net', 'gak.webtoons.com', 'webtoons.static.naver.net', 'www.webtoons.com', 'assets.adobedtm.com']
                },
            ],
            series: {
                type: 'parallel',
                lineStyle: {
                    width: 4
                },
                data: [['03:00:11', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '203.104.175.37', '80', 'www.webtoons.com'], ['03:00:12', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '104.90.236.53', '80', 'assets.adobedtm.com'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '203.104.175.37', '80', 'www.webtoons.com'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.8', '80', 'webtoons.static.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:13', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:14', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '104.90.236.53', '80', 'assets.adobedtm.com'], ['03:00:16', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:16', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:16', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:21', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '104.90.236.53', '80', 'assets.adobedtm.com'], ['03:00:21', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:21', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:21', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '104.90.236.53', '80', 'assets.adobedtm.com'], ['03:00:21', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:21', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '104.90.236.53', '80', 'assets.adobedtm.com'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:27', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '114.111.45.205', '80', 'gak.webtoons.com'], ['03:00:28', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '104.90.236.53', '80', 'assets.adobedtm.com'], ['03:00:28', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:28', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'webtoon.phinf.naver.net'], ['03:00:29', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'static.cbox.naver.net'], ['03:00:29', 'RMUn6owxz3Npjow@ku.ac.th', '158.108.230.26', '23.209.180.9', '80', 'static.cbox.naver.net']]

            }
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