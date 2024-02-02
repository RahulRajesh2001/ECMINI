import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASEURL;


export const loginUser = createAsyncThunk("login/loginUser",async({ email, password }) => {
 const response=await axios.post(`${baseUrl}/api/v1/login`, { email,password });
 return response.data.user;
});


const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: null,
    token:null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null; 
        localStorage.setItem('token', state.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;