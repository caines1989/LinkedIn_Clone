import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {

  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  user: null,

  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.user += null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { login, logout } = userSlice.actions;


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
