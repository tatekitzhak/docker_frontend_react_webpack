import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

var tid;
function fetchMyData(i) {
    // simulating data fetching from server
    return new Promise((resolve, reject) => {
        tid = setTimeout(() => resolve(Math.random()), i * 1000);
        setTimeout(reject, 5000);
    });
}

export const fetchData = createAsyncThunk(
    'data/fetchStatus',
    async (i, thunkAPI) => {
        console.log('createAsyncThunk1:', i, 'createAsyncThunk2:', thunkAPI);
        //const state = thunkAPI.getState();
        //const extra = thunkAPI.extra;
        //const requestId = thunkAPI.requestId;
        //const signal = thunkAPI.signal;
        //console.log(state, extra, requestId, signal);
        //thunkAPI.dispatch({ type: "data/cancel" });
        //thunkAPI.rejectWithValue("rejected", { a: 0 });
        //thunkAPI.fulfillWithValue("fulfilled", { a: 0 });
        try {
            return await fetchMyData(i);
        } catch (err) {
            return thunkAPI.rejectWithValue('time out!');
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

const initialState = { value: 0 };

const dataFetchSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        incrementFetch: (state) => {
            state.value += 1;
            console.log('incrementFetch:', state.value);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                console.log(action);
                clearTimeout(tid);
                return 'fetching data...';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                console.log(action);
                return action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log(action);
                if (action.meta.aborted) return 'cancelled!';
                return action.payload;
            });
    }
});

export const { incrementFetch } = dataFetchSlice.actions;

export default dataFetchSlice.reducer;
