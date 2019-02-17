import React, { Component } from 'react';

import Header from "./Layouts/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default props => (
	<div>
		<Header/>
		
		<AddTask/>
		
		<TaskList tasks={props.tasks}/>
	</div>
);