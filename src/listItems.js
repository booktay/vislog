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
        <ListItem button component={Link} to="/assignment1">
            <ListItemIcon>
                <BubbleChartIcon />
            </ListItemIcon>
            <ListItemText primary="Assignment1" />
        </ListItem>
        <ListItem button component={Link} to="/assignment2">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Assignment2" />
        </ListItem>
        <ListItem button component={Link} to="/assignment3">
            <ListItemIcon>
                <ChartIcon />
            </ListItemIcon>
            <ListItemText primary="Assignment3" />
        </ListItem>
    </div>
);