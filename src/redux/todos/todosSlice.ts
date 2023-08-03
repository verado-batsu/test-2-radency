import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { todoData } from '../../data';
import { ITodoItem } from '../../types';


const initialState: ITodoItem[] = todoData;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
		  return [
			...state,
			action.payload
	  	]
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
       return [...state.filter(todo => todo.id !== action.payload)]
	  },
	editTodo: (state, action: PayloadAction<ITodoItem>) => {
		return [
			...state.map(todo => {
				if (todo.id === action.payload.id) {
					return action.payload
				}
				return todo;
			})
		]
	  },
	archiveTodo: (state, action: PayloadAction<number>) => {
      
	},
  }
})

export const { addTodo, deleteTodo, editTodo, archiveTodo} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;