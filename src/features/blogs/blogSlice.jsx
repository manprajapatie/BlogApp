import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogs from '../../data/blogs.json';
import authors from '../../data/authors.json';

const initialState = {
  blogs: [],
  authors: [],
  status: 'idle',
};

export const fetchData = createAsyncThunk('blog/fetchData', async () => {
  return { blogs, authors };
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.blogs = action.payload.blogs;
      state.authors = action.payload.authors;
      state.status = 'succeeded';
    });
  },
});

export default blogSlice.reducer;