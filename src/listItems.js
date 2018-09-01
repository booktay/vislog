import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ChartIcon from '@material-ui/icons/ShowChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom'

export const menu = (
    <div>
        <ListItem button component={Link} to="/week1">
            <ListItemIcon>
                <BubbleChartIcon />
            </ListItemIcon>
            <ListItemText primary="Week 1" />
        </ListItem>
        <ListItem button component={Link} to="/week3">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Week 3" />
        </ListItem>
        <ListItem button component={Link} to="/week4">
            <ListItemIcon>
                <ChartIcon />
            </ListItemIcon>
            <ListItemText primary="Week 4" />
        </ListItem>
    </div>
);