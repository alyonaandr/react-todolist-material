import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from "react-redux";
import {showAllTasks, showDoneTasks, showRemoveTasks} from "../../store/actions";

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
		
		const {showAllTasksHandler, showDoneTasksHandler, showRemoveTasksHandler} = this.props;
		
		switch (event.target.innerText) {
			case "ALL":
				showAllTasksHandler();
				break;
			case "DONE":
				showDoneTasksHandler();
				break;
			case "REMOVE":
				showRemoveTasksHandler();
				break;
		}
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

const mapStateToProps = (state) => ({...state});
const mapActionsToProps = (dispatch) => ({
	showAllTasksHandler: () => dispatch(showAllTasks()),
	showDoneTasksHandler: () => dispatch(showDoneTasks()),
	showRemoveTasksHandler: () => dispatch(showRemoveTasks())
});

export default withStyles(styles)(connect(mapStateToProps, mapActionsToProps)(TaskFilter));