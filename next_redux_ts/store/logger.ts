import { AnyAction, Reducer } from '@reduxjs/toolkit';
const logger = (reducer : Reducer<any, AnyAction>) =>{
    return (prevState: any, action : AnyAction) =>{
        console.group(action.type);
        console.log("PrevState: ", prevState);
        console.log("Action ", action);
        const newState = reducer(prevState, action);
        console.log("NewState: ", newState);
        console.groupEnd();
        return newState;
    }
}

export default logger;