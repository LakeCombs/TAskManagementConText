import React, { useReducer, createContext } from "react";
import { v4 as uuid } from "uuid";
import { AppReducer } from "./AppReducer";

const initialState = {
	tasks: [
		{ id: uuid(), name: "finish my project" },
		{ id: uuid(), name: "call project manager" },
		{ id: uuid(), name: "read a book" },
		{ id: uuid(), name: "write a book" },
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);


	//code for adding task to the database

	const addTask =(task)=>{
		dispatch({
			type:'ADD_TASK',
			payload: task
		})
	}

	//code for deleting task frm the database

	const deleteTask = (id)=>{
		dispatch({
			type:"DELETING_TASK",
			payload: id,
		})
	}

	// code for editing task

	const editingTask =(task)=>{
		dispatch({
			type:"EDITING_TASK",
			payload: task,
		})
	}

	return <GlobalContext.Provider
    value={{
		task: state.tasks,
		addTask,
		deleteTask,
		editingTask,
    }}
    >{children}</GlobalContext.Provider>;
};
