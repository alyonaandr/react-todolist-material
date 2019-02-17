import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

const Home = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography component="h2" variant="h1" gutterBottom>
							Task Manager
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>Task Manager</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>Task Manager</Paper>
				</Grid>
			</Grid>
		</div>
	)
};

export default withStyles(styles)(Home);
