import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { HttpService } from '@/service/http/HttpService';
import { ServerEndpoints } from '@/service/http/serverEndpoint';
import { DOMAIN_NAME } from '../../../../../config/HTTP_URL_Settings'
import { info } from '@/service/helpers/resources';
/**
 * https://medium.com/@learnwithalfred/react-with-redux-toolkit-and-createasyncthunk-complementary-guide-c3a3bb2a1113
 * https://github.com/learnwithalfred/space-travel-booking
 * https://jsonplaceholder.typicode.com/albums
 */

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
    const response = await axios.get(ROCKET_URL);
    return response.data;
});


// const BASE_API_URL = 'https://jsonplaceholder.typicode.com/comments?';
// const BASE_API_URI = `http://localhost:8000/api/category/subcategory/topics?`;
// const BASE_API_URI = `http://18.216.178.71/api/category/subcategory/topics?`;
// http://localhost:8000/api/category/subcategory/topics?title=category_name&category_id=1234&title=subcategory_name&subcategory_id=6475ce5ef4cbf502a1205da9
// const BASE_API_URI = `${base_url.API_URL}/subcategory/topics?`;

const BASE_API_URL = `${DOMAIN_NAME}/${ServerEndpoints.SUBGATEGORY_TOPICS}?`;

// const BASE_URL = `${ENV.YOUTUBE_TRANSCRIPT_API}/subcategory/topics?`;
// const API_URL = `${ENV.CONVERTIBLE_RESOURCE}/${ServerEndpoints.SUBGATEGORY_TOPICS}`
export const fetchTopicsById = createAsyncThunk(
    'topics/fetchTopicsById',
    async (queryString , thunkAPI) => {
        const { dispatch, extra, fulfillWithValue, getState, rejectWithValue} = thunkAPI;
        console.log('thunkAPI:', thunkAPI.requestId)
        console.log('fetchTopicsById:', queryString)

        const clientInformation = {
            data: '',
            geographicLocation: {},
            timeStamp: '',
            info: info
          };
        
        const axios_instance_config = {
            method: 'GET',
            url: BASE_API_URL,
            params: {
                requestId: thunkAPI.requestId,
                _limit: 3,
                title_category: 'category_name',
                category_id: queryString[0].category_id,
                title_subcategory: 'subcategory_name',
                subcategory_id: queryString[0].subcategory_id
            },
            headers: {
                Authorization: 'Bearer my fetchTopicsById',
                'Content-Type': 'application/json',
                'Accept-Language': '*',
                'My-Custom-Header': 'fetchTopicsById'
            },
            data: [
                clientInformation
            ],
            responseEncoding: 'utf8'
        };

        try {

            const AxiosHTTP_client = new HttpService(BASE_API_URL, "GET", axios_instance_config);
            const {data} = await AxiosHTTP_client.get(BASE_API_URL, "GET", clientInformation)
            console.log('AxiosHTTP_client:', data);

           
            // const { data } = await axios(axios_instance_config);

            return data;
        } catch (error) {
            return rejectWithValue(error.response);
        } finally{
            // console.log('finally fetchTopicsById:', thunkAPI)
        }
    },
    { //https://redux-toolkit.js.org/api/createAsyncThunk
        // condition: (arg, { getState, extra }) => true, // 'false' to prevent running payload creator
        // OR
        // condition: (userId, { getState, extra }) => {
        //     const { users } = getState()
        //     const fetchStatus = users.requests[userId]
        //     if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
        //       // Already fetched or in progress, don't need to re-fetch
        //       return false // 'false' to prevent running payload creator
        //     }
        //   },
        // dispatchConditionRejection: true, // 'true' to dispatch 'rejected' action when condition() returns 'false'
        // idGenerator: ()=>Math.random(),    // function generating 'requestId', defaults to nanoid()
        // serializeError: console.error,    // replaces the internal miniSerializeError method
        // getPendingMeta: ({ arg, requestId }, { getState, extra })=>({})   // creates an object that will be merged into the pendingAction.meta field.
    }
);

const topics_state = {
    data: [],
    message: '',
    isLoading: false,
    status: null,
    statusLoading: 'idle', // 'loading'/pending, 'succeeded'/(fulfilled), failed / 'Rejected'
    statusMessage: null,
    statusCode: undefined
};

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: topics_state,
    reducers: {
        enableLoading: (state, action) => {
            state.isLoading = true;
        },
        disableLoading: (state, action) => {
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopicsById.pending, (state, action) => {
                const { error, meta, payload , type } = action;
                console.log('fetchTopicsById.pending:', action)
                state.statusLoading = 'loading'; // pending
            })
            .addCase(fetchTopicsById.fulfilled, (state, action) => {
                const { meta, payload , type } = action;
                console.log('fetchTopicsById.fulfilled:', action)
                state.statusLoading = 'succeeded'; // fulfilled
                state.isLoading = true;
                state.statusMessage = meta.requestStatus;
                state.data = [payload[0].data.topics];
            })
            .addCase(fetchTopicsById.rejected, (state, action) => {
                const { error, meta, payload , type } = action;
                console.log('fetchTopicsById.rejected:', action)
                // state.data.push(payload.data);
                state.statusLoading = error.message; // failed OR rejected
                state.statusMessage = error.message;
                state.status = payload.statusText;
                state.statusCode = payload.status;
            });
    }
});


export const { disableLoading, enableLoading } = topicsSlice.actions

// Access to configureStore Reducer types is one of these features:
export const selectTopics = (state) => {
    return state.topics.data;
};

export const getTopicsStatus = (state) => state.topics;

export const getTopicsError = (state) => state.topics.error;
