import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {},
}

export const profileSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.profile = action.payload;
    },
    logoutUser: (state) => {
      state.profile = {};
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = profileSlice.actions

export default profileSlice.reducer