import React from 'react';

export const TaskList = (props) => {
	
	const {tasks} = props;
	
	return (
		<ul>
			{tasks.map((el, index) => (
				<li key={index}>
					{el.name}
					{
						el.done?"":<button onClick={onDoneHandler}>Done</button>
					}
					<button onClick={onRemoveHandler}>Remove</button>
				</li>
			))}
		</ul>
	)
};

const onDoneHandler = () => {
	console.log("onDoneHandler")
};

const onRemoveHandler = () => {
	console.log("onRemoveHandler")
};