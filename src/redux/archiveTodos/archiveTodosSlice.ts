import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { RootState } from './../store';

import { archiveTodoData } from '../../data';
import { ITodoItem } from '../../types';


const initialState: ITodoItem[] = archiveTodoData;

export const archiveTodosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      
	  },
	unarchiveTodo: (state, action: PayloadAction<number>) => {
      
	},
  }
})

export const { deleteTodo,  unarchiveTodo } = archiveTodosSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export const archiveTodosReducer = archiveTodosSlice.reducer;