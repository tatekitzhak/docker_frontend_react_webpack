import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HttpService } from '@/service/http/HttpService';
import { ServerEndpoints } from '@/service/http/serverEndpoint';
import { DOMAIN_NAME } from '../../../../../config/HTTP_URL_Settings';
import { info } from '@/service/helpers/resources';
// const BASE_API_URI = 'http://localhost:8000/api/category';
const BASE_API_URI = 'http://18.216.178.71/api/category';

// const BASE_URL = ENV.YOUTUBE_TRANSCRIPT_API;
// const BASE_API_URL = `${ENV.CONVERTIBLE_RESOURCE}/${ServerEndpoints.FETCH_GATEGORY}`;
const BASE_API_URL = `${DOMAIN_NAME}/${ServerEndpoints.FETCH_GATEGORY}`;

console.log('BASE_API_URL:', BASE_API_URL)
export const fetchCategoriesList = createAsyncThunk(
    'categories/fetchCategoriesList',
    async (id_params, thunkAPI) => {
        const { dispatch, extra, fulfillWithValue, getState, rejectWithValue } = thunkAPI;
        const clientInformation = {
            data: '',
            geographicLocation: {},
            timeStamp: '',
            info: info
          };
        // https://github.com/axios/axios#request-config
        const axios_instance_config = {
            method: 'GET',
            url: BASE_API_URL,
            params: {
                requestId: thunkAPI.requestId,
                // _limit: 3,
                // title: 'category_name',
                // category_id: id_params[0].category_id,
                // title: 'subcategory_name',
                // subcategory_id: id_params[0].subcategory_id
            },
            headers: {
                Authorization: 'Bearer my fetchCategoriesList',
                'Content-Type': '',
                'My-Custom-Header': 'fetchCategoriesList'
            },
            data: [
                clientInformation
            ],
            responseEncoding: 'utf8',
        };

        try {
            const AxiosHTTP_client = new HttpService(BASE_API_URL, "GET", axios_instance_config);
            const {data} = await AxiosHTTP_client.get(BASE_API_URL, "GET", clientInformation)
            console.log('AxiosHTTP_client:', data);
/* 
            const { data } = await axios(config);
            return data.data.categories;
 */
            return data.data.categories;
        } catch (error) {
            return rejectWithValue(error.response);
        } finally {
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

const initialState = () => ({
    categoriesList: [],
    errors: [],
    message: '',
    isLoading: false,
    hasErrors: false,
    status: undefined,
    statusLoading: 'idle', // 'loading'/pending, 'succeeded'/(fulfilled), failed / 'Rejected'
    statusMessage: null,
    statusCode: undefined
});

const categoriesSlice = createSlice({
    name: 'listOfCategories ',
    initialState: initialState,
    // actions types
    reducers: {
        resetCategoriesInitialState: (state) => {
            initialState()
        },
        disableLoading: (state, action) => {
            state.isLoading = false;
        },
        enableLoading: (state, action) => {
            state.isLoading = true;
        },
        getCategoriesList: (state) => {
            state.categoriesList;
            state.loading = true;
        },
        getCategoriesListSuccess: (state, { payload }) => {
            state.categoriesList = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getcategoriesListFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategoriesList.pending, (state) => {
                // const { error, meta, payload , type } = action;
                // console.log('fetchTopicsById.pending:', action)
                // state.statusLoading = 'loading'; // pending
            })
            .addCase(fetchCategoriesList.fulfilled, (state, action) => {
                const { meta, payload, type } = action;

                state.statusLoading = 'succeeded'; // fulfilled
                state.isLoading = true;
                state.statusMessage = meta.requestStatus;
                state.categoriesList = payload;
            })
            .addCase(fetchCategoriesList.rejected, (state, action) => {
                // const { error, meta, payload , type } = action;
                // console.log('fetchTopicsById.rejected:', action)
                // // state.data.push(payload.data);
                // state.statusLoading = error.message; // failed OR rejected
                // state.statusMessage = error.message;
                // state.status = payload.statusText;
                // state.statusCode = payload.status;
                // switch (action ?.response ?.status) {
                //     case 401:
                //         state.errors.push({ error: "Access denied." });
                //         break;
                //     case 403:
                //         state.errors.push({ error: "Forbidden." });
                //         break;
                //     default:
                //         state.errors.push(action);
                //         break;
                // }
            })
    }
});

// Three actions generated from the slice
export const {
    enableLoading,
    getCategoriesList,
    getCategoriesListSuccess,
    getcategoriesListFailure,
    resetCategoriesInitialState } = categoriesSlice.actions;

// A selector
export const selectCategoriesList = (state) => {

    return state.categoryReducer.categories.categoriesList;
};

export const getCategoriesStatus = (state) => {
    return state.categoryReducer.categories;
};

// Memoized Selector
export const selectMemoizedCategories = createSelector(
    /* [selectCategoriesList , (state, userId) => { console.log('selectMemoizedCategories1:', state.categoryReducer.categories); return state.categoryReducer}],
  (categoriesList , userId) => { 
      console.log('selectMemoizedCategories:', categoriesList , 'userId:',userId)
      return categoriesList  === userId.categoriesList 
  } */
    (state) => {

        return state.categoryReducer.categories
    },
    (items) => {

        return items;
    }
);

// The reducer
export default categoriesSlice.reducer;
