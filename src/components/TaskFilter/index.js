import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	container: {
		justifyContent: "center"
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
	},
});

class TaskFilter extends Component {
	state = {
		value: 0,
	};
	
	handleChange = (event, value) => {
		this.setState({ value });
	};
	render(){
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={24} className={classes.container}>
					<Grid item xs={10} sm={8} md={6}>
						<Paper className={classes.paper}>
							<Tabs
								value={this.state.value}
								onChange={this.handleChange}
								indicatorColor="primary"
								textColor="primary"
								centered
							>
								<Tab label="All" />
								<Tab label="Done" />
								<Tab label="Remove" />
							</Tabs>
						</Paper>
					</Grid>
				</Grid>
			</div>
		)
	}
	
}

export default withStyles(styles)(TaskFilter);