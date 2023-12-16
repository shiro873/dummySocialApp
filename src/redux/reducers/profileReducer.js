import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {},
}

export const profileSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('action.payload ', action.payload);
      state.profile = action.payload;
    },
    lougoutUser: (state) => {
      state.profile = {};
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, lougoutUser } = profileSlice.actions

export default profileSlice.reducer