import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StorageKeys from '../../constants/storage-keys';
import userAPI from '../../api/userAPI';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call API to register
  const data = await userAPI.register(payload);

  // save data to loacl storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); //do data.user la 1 object

  //return user data
  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userAPI.login(payload);

  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); //do data.user la 1 object

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  },
  reducers: {
    logout(state) {
      //clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      //reset state.current
      state.current = {};
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; //default export
