import React, { Component } from 'react';

import {TaskList} from "./components/TaskList";
import {addNewTask} from "./store/actions";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

class App extends Component {
	render() {
		console.log(this.props);
		const {tasks, addNewTask} = this.props;
		
		return (
			<div className="App">
				<form action="" onSubmit={(event)=>{
					this.submitHandler(event, addNewTask)
				}}>
					<input type="text"/>
					<button>Add task</button>
				</form>
				
				<TaskList tasks={tasks}/>
			</div>
		);
	}
	
	submitHandler = (e,addNewTask) => {
		e.preventDefault();
		console.log("submitHandler",e.target[0].value);
		addNewTask(e.target[0].value);
		e.target.reset();
	}
}

const putStateToProps = (state) => {
	return {
		...state
	}
};

const putActionsToComponent = (dispatch) => {
	return {
		addNewTask: bindActionCreators(addNewTask,dispatch)
	}
};

export default connect(
	putStateToProps,
	putActionsToComponent
)(App);