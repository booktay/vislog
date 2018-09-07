import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HashLink as Link } from 'react-router-hash-link';

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
        display: 'block',
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
                        Assignment#1
                    </Typography>
                    <Typography variant="title" component="h3">
                        <Button color="primary" className={classes.button} component={Link} to="/assignment1">
                            Thailand Domistic Network
                        </Button>
                        <Button color="primary" className={classes.button} component={Link} to="/assignment1#inter">
                            Thailand International Network
                        </Button>
                    </Typography>
                </Paper>
            </div>
            <div className={classes.plate}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Assignment#2
                    </Typography>
                    <Typography variant="title" component="h3">
                        <Button color="primary" className={classes.button} component={Link} to="/assignment2">
                            Users Timestamps
                        </Button>
                        <Button color="primary" className={classes.button} component={Link} to="/assignment2#iptime">
                            IP Usage Timestamps
                        </Button>
                        <Button color="primary" className={classes.button} component={Link} to="/assignment2#ipcir">
                            IP Usage Chart
                        </Button>
                        <Button color="primary" className={classes.button} component={Link} to="/assignment2#userac">
                            User Activities Chart
                        </Button>
                        <Button color="primary" className={classes.button} component={Link} to="/assignment2#logtime">
                            Login/Logout Timestamps
                        </Button>
                        <Button color="primary" className={classes.button} component={Link} to="/assignment2#agendis">
                            Agent IP (::ffff:158.108.218.XXX) Distribution
                        </Button>
                    </Typography>
                </Paper>
            </div>
            <div className={classes.plate}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Assignment#3
                    </Typography>
                    <Typography variant="title" component="h3">
                        <Button color="primary" className={classes.button} component={Link} to="/assignment3-1">
                            Weblog Analysis Part 1
                        </Button>
                    </Typography>
                    <Typography variant="title" component="h3">
                        <Button color="primary" className={classes.button} component={Link} to="/assignment3-2">
                            Weblog Analysis Part 2
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