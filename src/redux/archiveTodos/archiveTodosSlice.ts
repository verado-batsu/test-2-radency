import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { RootState } from './../store';

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

		deleteArchiveTodo: (state, action) => {
		
		},

		unarchiveTodo: (state, action: PayloadAction<number>) => {
		
		},
  }
})

export const { addArchiveTodo, deleteArchiveTodo,  unarchiveTodo } = archiveTodosSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export const archiveTodosReducer = archiveTodosSlice.reducer;