import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    plate: {
        marginBottom: '0.5em',
    },
    button: {
        margin: theme.spacing.unit,
        // display: 'list-item',
    },
});

function PaperSheet(props) {
    const { classes } = props;

    return (
        <React.Fragment >
            <div className={classes.plate}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Siwanont Sittinam 5810504574
                    </Typography>
                    <Typography component="p">
                            CPE#4, Faculty of Engineering, Kasetsart University
                    </Typography>
                </Paper>
            </div>
            <div className={classes.plate}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Assignment
                    </Typography>
                    <Typography variant="title" component="h3">
                        <Button color="primary" className={classes.button} component={Link} to="/assignment1">
                            Assignment#1 Thailand Domistic & International Network
                        </Button>
                    </Typography>
                    <Typography variant="title" component="h3">
                        <Button color="primary" className={classes.button} component={Link} to="/assignment2">
                            Assignment#2 Time series & Distribution Analysis
                        </Button>
                    </Typography>
                    <Typography variant="title" component="h3">
                        <Button color="primary" className={classes.button} component={Link} to="/">
                            Assignment#3 Weblog Analysis
                        </Button>
                    </Typography>
                </Paper>
            </div>
        </React.Fragment >
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);