import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [{
    username: 'first user',
    post: 'first post ever made which makes no sens',
  }],
}

export const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
    },
    removePost: (state, action) => {
      state.posts.filter(post => post.id !== action.payload?.id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost, removePost } = postSlice.actions

export default postSlice.reducer