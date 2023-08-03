import { configureStore } from '@reduxjs/toolkit'

import { todosReducer } from './todos/todosSlice'
import { summaryReducer } from './summary/summarySlice'
import { archiveTodosReducer } from './archiveTodos/archiveTodosSlice'


export const store = configureStore({
	reducer: {
		todos: todosReducer,
		archiveTodos: archiveTodosReducer,
		summary: summaryReducer,
	}
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch