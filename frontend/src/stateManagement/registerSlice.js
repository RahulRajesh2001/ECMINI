import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASEURL

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async ({ email, name, password }) => {
    await axios.post(`${baseUrl}/api/v1/register`, { email, password, name })
  }
)

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
        state.loading = false
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default registerSlice.reducer
