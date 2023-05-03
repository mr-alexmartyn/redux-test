import { configureStore } from '@reduxjs/toolkit';
import { usersReduser } from './users/usersSlice';

export const store = configureStore({
  reducer: usersReduser,
});
