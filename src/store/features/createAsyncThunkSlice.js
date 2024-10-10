/* import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// Authenticate user (you can dispatch this async action from your component)
export const authUser = createAsyncThunk('user/authUser', async (authParams, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        const response = await axios.get('https://someapi.com/users/signin', { authParams });
        return response.data.user;
    } catch (error) {
        // Use `err.response.data` as `action.payload` for a `rejected` action, by explicitly returning it using the `rejectWithValue()` utility
        return rejectWithValue(error);
    }
});

const userState = {
    name: 'authUser',
    initialState: {
        authenticated: false,
        info: null,
        isLoading: false,
        error: null
    },
    extraReducers: {
        [authUser.pending]: (state, action) => {
            state.isLoading = true;
        },
        [authUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = true;
            state.info = action.payload;
        },
        [authUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
};

const userAuthSlice = createSlice(userState);

// Exporting data for selectors
export const isAuthenticated = (state) => {
    return state.currentUser.authenticated;
};

export default userAuthSlice.reducer;
 */