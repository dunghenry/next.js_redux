import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from './logger';
const store = configureStore({
    reducer: logger(rootReducer),
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;