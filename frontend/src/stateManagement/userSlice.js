// userSlice.js
import { createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
