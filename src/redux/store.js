import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postReducer';
import profileReducer from './reducers/profileReducer';

export const store = configureStore({
  reducer: {
    post: postReducer,
    profile: profileReducer
  },
});