import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { todoData } from '../../data';
import { ITodoItem } from '../../types';


const initialState: ITodoItem[] = todoData;

export const todosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
		  return [
			...state,
			action.payload
	  	]
    },
    deleteTodo: (state, action) => {
      
	  },
	editTodo: (state, action) => {
      
	  },
	archiveTodo: (state, action: PayloadAction<number>) => {
      
	},
  }
})

export const { addTodo, deleteTodo, editTodo, archiveTodo} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;