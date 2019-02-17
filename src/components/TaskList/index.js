import React from 'react';

import {doneTask, removeTask} from "../../store/actions";
import {connect} from "react-redux";

const TaskList = (props) => {
	
	const {tasks, setTaskDone, setTaskRemove} = props;
	console.log(props);
	
	return (
		<ul>
			{tasks.map((el, index) => (
				<li key={index}>
					{el.name}
					{
						el.done?"":<button onClick={() => setTaskDone(index)}>Done</button>
					}
					<button onClick={() => setTaskRemove(index)}>Remove</button>
				</li>
			))}
		</ul>
	)
};

const mapStateToProps = state => ({...state});
const mapActionsToProps = dispatch =>{
	return {
		setTaskDone: task => dispatch(doneTask(task)),
		setTaskRemove: task => dispatch(removeTask(task)),
	}
};

export default connect(mapStateToProps,mapActionsToProps)(TaskList);