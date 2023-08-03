import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { RootState } from './../store';

import { statisticData } from '../../data';
import { ISummaryItem } from '../../types';


const initialState: ISummaryItem[] = statisticData;

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
	  changeSummary: (state, action: PayloadAction<ISummaryItem[]>) => {
		  return [
			  ...action.payload,
		  ]
	  }
  }
})

export const { changeSummary } = summarySlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export const summaryReducer = summarySlice.reducer;