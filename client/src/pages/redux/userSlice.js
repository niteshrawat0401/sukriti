import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteUserApi, getUserApi, updateUserApi } from "./api/auth";


export const getUser = createAsyncThunk('auth/getUser', async ( thunkAPI) => {
    try {
      const response = await getUserApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  
  export const updateUser = createAsyncThunk('auth/updateUser', async ({ id, data }, thunkAPI) => {
    console.log(data)
    try {
      const response = await updateUserApi(id, data);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  
  export const deleteUser = createAsyncThunk('auth/deleteUser', async (id, thunkAPI) => {
    try {
      const response = await deleteUserApi(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });


const initialState = {
    users: [],
    loading: false,
    error: null,
  };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
      builder.addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  

      builder.addCase(deleteUser.fulfilled, (state, action) => {
        if (Array.isArray(state.users)) {
          state.users = state?.users?.filter((user) => user._id !== action.payload);
        }
      });
  

      builder.addCase(updateUser.fulfilled, (state, action) => {
        if (Array.isArray(state.users)) {
          const updatedUserIndex = state?.users?.findIndex((user) => user._id === action.payload._id);
          if (updatedUserIndex !== -1) {
            state.users[updatedUserIndex] = action.payload;
          }
        }
      });     
      
    },
  });
  
  export default userSlice.reducer;