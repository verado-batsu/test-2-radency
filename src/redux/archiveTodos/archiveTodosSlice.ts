import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { archiveTodoData } from '../../data';
import { ITodoItem } from '../../types';


const initialState: ITodoItem[] = archiveTodoData;

export const archiveTodosSlice = createSlice({
  name: 'archiveTodo',
  initialState,
	reducers: {
		addArchiveTodo: (state, action:  PayloadAction<ITodoItem>) => {
			return [
				...state,
				action.payload
			]
		},

		deleteArchiveTodo: (state, action: PayloadAction<string>) => {
			return [...state.filter(todo => todo.id !== action.payload)]
		},

		unarchiveTodo: (state, action: PayloadAction<number>) => {
		
		},
  }
})

export const { addArchiveTodo, deleteArchiveTodo,  unarchiveTodo } = archiveTodosSlice.actions;

export const archiveTodosReducer = archiveTodosSlice.reducer;