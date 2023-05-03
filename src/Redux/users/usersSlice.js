import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUsers(state, { payload }) {
      state.users.push(payload);
    },
  },
});

export const { addUsers } = userSlice.actions;
export const usersReduser = userSlice.reducer;
