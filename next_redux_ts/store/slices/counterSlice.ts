import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    count: number;
}

const initialState : CounterState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increase: (state) =>{
            state.count += 1 
        }
    }
})
export const {increase} = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;