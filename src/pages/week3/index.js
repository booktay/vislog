import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
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
        marginBottom: '0.8em',
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <React.Fragment >
            <div className={classes.appBarSpacer} />
            <Card className={classes.card}>
                <Typography variant="headline" component="h2" align="center" color="inherit" noWrap className={classes.title}>
                    Indo
                </Typography>
                <CardContent>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell numeric>Calories</TableCell>
                                    <TableCell numeric>Fat (g)</TableCell>
                                    <TableCell numeric>Carbs (g)</TableCell>
                                    <TableCell numeric>Protein (g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell component="th" scope="row">
                                                {n.name}
                                            </TableCell>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                            <TableCell numeric>{n.carbs}</TableCell>
                                            <TableCell numeric>{n.protein}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);