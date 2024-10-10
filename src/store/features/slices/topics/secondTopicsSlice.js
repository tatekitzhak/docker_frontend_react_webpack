import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * https://www.youtube.com/watch?v=qedcu9UqHzw&ab_channel=SakuraDev
 * https://github.com/vahid-nejad/redux-toolkit-example
 * https://jsonplaceholder.typicode.com/albums
 * https://jsonplaceholder.typicode.com/posts
 * https://jsonplaceholder.typicode.com/posts/1/comments
 */

export const axiosPersonThunk = createAsyncThunk('person/fetch', async (personId, thunkAPI) => {
    console.log('axiosPersonThunk:', personId);
    const response = await axios('https://jsonplaceholder.typicode.com/albums');
    const data = response.json();
    return data;
});

export const fetchPersonThunk = createAsyncThunk('person/save', async (name, thunkAPI) => {
    console.log('fetchPersonThunk:', name);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = await response.json();
    return data;
});

const initialState = {
    topics: [],
    loading: false,
    isSuccess: false,
    message: ''
};

export const PersonSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            console.log('PersonSlice -> reducers:', state, action);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(axiosPersonThunk.fulfilled, (state, action) => {
            console.log('PersonSlice -> axiosPersonThunk.fulfilled:');
        });

        builder.addCase(fetchPersonThunk.fulfilled, (state, action) => {
            console.log('PersonSlice -> fetchPersonThunk.fulfilled:', state, action);
            state.topics.push(action.payload);
        });
    }
});

// export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
