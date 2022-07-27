import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState{
    count: number;
}

const initialState : CounterState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) =>{
            state.count += 1 
        },
        decrement: (state) =>{
            state.count -= 1 
        }
    }
})
export const {increment, decrement} = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;