import { Action, Reducer } from '@reduxjs/toolkit';
const logger = (reducer : Reducer) =>{
    return (prevState: any, action : Action) =>{
        console.group(action.type);
        console.log("PrevState: " + prevState);
        console.log("Action " + action);
        const newState = reducer(prevState, action);
        console.log("NewState: " + newState);
        return newState;
    }
}

export default logger;