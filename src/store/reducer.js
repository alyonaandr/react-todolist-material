import {ADD_NEW_TASK, DONE_TASK} from "../index";

const initState = {
	tasks: [
		{name: "Wake up", done:false}
	],
	user: null
};

export const reducer = (state=initState,action) => {
	
	console.log(action);
	
	switch (action.type) {
		case ADD_NEW_TASK:
			return {
				...state, tasks: [...state.tasks, {name: action.payload, done:false}]
			};
		case DONE_TASK:
			// state.tasks[action.payload].done = true;
			return {
				// ...state, tasks: state.tasks
				...state, tasks: state.tasks.map((el, i) => action.payload === i?{...el, done:true}:el)
			};
	}
	return state;
};