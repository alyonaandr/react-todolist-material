import {combineReducers} from 'redux';

import modifyTasksReduser from './modifyTasksReduser';
import filterTasksReduser from './filterTasksReduser';


export default combineReducers({
	modifyTasksReduser,
	filterTasksReduser
})