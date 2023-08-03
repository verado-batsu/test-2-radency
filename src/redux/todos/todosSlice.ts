import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { RootState } from './../store';

import { todoData } from '../../data';
import { ITodoItem } from '../../types/todoTypes';


const initialState: ITodoItem[] = todoData;

export const todosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      
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

// export const selectCount = (state: RootState) => state.counter.value;

export const todosReducer = todosSlice.reducer;