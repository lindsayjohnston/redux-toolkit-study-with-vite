//represents the logic and the data for one
//slice of Redux state -- "DUCKS" pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
   value: number;
}

const initialState: CounterState = {
   value: 5
}

const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      //increment
      incremented(state) {
         state.value++;
      },

      amountAdded(state, action : PayloadAction<number>){
         state.value += action.payload
      }
      //decrement
      //reset
   }
})

export const {incremented, amountAdded} = counterSlice.actions
export default counterSlice.reducer;