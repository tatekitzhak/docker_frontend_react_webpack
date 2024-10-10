import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopics = createAsyncThunk(
    'topics/fetchData',
    async (param, thunkAPI) => {
        console.log('topics createAsyncThunk:', param);
        //const state = thunkAPI.getState();
        //const extra = thunkAPI.extra;
        //const requestId = thunkAPI.requestId;
        //const signal = thunkAPI.signal;
        //console.log(state, extra, requestId, signal);
        //thunkAPI.dispatch({ type: "data/cancel" });
        //thunkAPI.rejectWithValue("rejected", { a: 0 });
        //thunkAPI.fulfillWithValue("fulfilled", { a: 0 });
        try {
            // thunkAPI.dispatch(enableLoading());
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log('data:', data);
            // set data
            //   thunkAPI.dispatch(incrementCount());
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(error.response);
        } finally {
            // thunkAPI.dispatch(disableLoading());
        }
    },
    {
        // condition: (arg, { getState, extra }) => true, // 'false' to prevent running payload creator
        // dispatchConditionRejection: true, // 'true' to dispatch 'rejected' action when condition() returns 'false'
        // idGenerator: ()=>Math.random(),    // function generating 'requestId', defaults to nanoid()
        // serializeError: console.error,    // replaces the internal miniSerializeError method
        // getPendingMeta: ({ arg, requestId }, { getState, extra })=>({})   // creates an object that will be merged into the pendingAction.meta field.
    }
);

const initialState = {
    data: [],
    loading: false,
    isSuccess: false,
    message: ''
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        enableLoading: (state, action) => {
            state.loading = true;
        },
        disableLoading: (state, action) => {
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopics.pending, (state, action) => {
                console.log('fetchTopics.pending:', action);
            })
            .addCase(fetchTopics.fulfilled, (state, action) => {
                console.log('fetchTopics.fulfilled:', action);
            })
            .addCase(fetchTopics.rejected, (state, action) => {
                console.log('fetchTopics.rejected:', action);
            });
    }
});

export default topicsSlice.reducer;
