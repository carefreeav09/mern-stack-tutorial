import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: '0 8rem',
        background: '#fafafa',
        boxShadow: 'none',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    marginTop : {
        marginTop : '1rem'
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <Container className={`${classes.container} mt-5`}>
            <Grid container spacing={3} className={`${classes.marginTop}`}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
