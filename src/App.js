
import React, { Component } from 'react';

import Header from "./Layouts/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

export default props => (
	<div>
		<Header/>
		
		<AddTask/>
		
		<TaskFilter/>
		
		<TaskList tasks={props.tasks}/>
	</div>
);