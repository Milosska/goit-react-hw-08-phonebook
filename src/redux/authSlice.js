import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addMatcher(isAnyOf(signUp.pending, logIn.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        (state, action) => {
          state.user.name = action.payload.user.name;
          state.user.email = action.payload.user.email;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(isAnyOf(signUp.rejected, logIn.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
