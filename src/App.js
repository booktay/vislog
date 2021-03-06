import React, { Component } from 'react';
import './css/App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { menu } from './listItems';
import { Link } from 'react-router-dom'
import Routing from './routes/'

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
		backgroundColor: '#37474F',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
		backgroundColor: '#263238',
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		backgroundColor: '#f5f5f5',
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing.unit * 7,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9,
		},
		backgroundColor: '#FFFFFF',
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		height: '100vh',
		overflow: 'auto',
		backgroundColor: '#263238',
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


class App extends Component {
	state = {
		open: true,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<React.Fragment>
				<CssBaseline />
				<div className={classes.root}>
					<AppBar
						position="absolute"
						className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
					>
						<Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerOpen}
								className={classNames(
									classes.menuButton,
									this.state.open && classes.menuButtonHidden,
								)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="title" color="inherit" noWrap className={classes.title}>
								Computer System & Network Security 2
              				</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						variant="permanent"
						classes={{
							paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
						}}
						open={this.state.open}
					>
						<div className={classes.toolbarIcon}>
							<Typography variant="subheading" color="inherit" noWrap className={classes.title}>
								<Button className={classes.button} component={Link} to="/">2018-S1-01204427</Button>
                  			</Typography>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<Divider />
						<List>{menu}</List>
					</Drawer>
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Routing />
					</main>
				</div>
			</React.Fragment>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
