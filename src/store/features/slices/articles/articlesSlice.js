import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { HttpService } from '@/service/http/HttpService';
import { ServerEndpoints } from '@/service/http/serverEndpoint';
import { DOMAIN_NAME } from '../../../../../config/HTTP_URL_Settings';
import { info } from '@/service/helpers/resources';


const BASE_API_URL = `${DOMAIN_NAME}/${ServerEndpoints.SUBGATEGORY_TOPICS}`;

// const BASE_API_URI = base_url.API_URL;
// const BASE_URL = ENV.YOUTUBE_TRANSCRIPT_API;
export const fetchArticlesData = createAsyncThunk(
    'articles/fetchById',
    async (articleInfo, thunkAPI) => {
        const { topic_id, article_id } = articleInfo
        const { dispatch, extra, fulfillWithValue, getState, rejectWithValue } = thunkAPI;

        // if (ENV.NODE_ENV_ == 'development') {
        //     console.log('articleInfo.topic_id:', topic_id, article_id)
        //     console.log('articleInfo.article_id:', article_id)
        // }

        const clientInformation = {
            data: '',
            geographicLocation: {},
            timeStamp: '',
            info: info
        };

        const axios_instance_config = {
            method: 'GET',
            url: `${BASE_API_URL}/article?topic_title=topic_name&topic_id=${articleInfo.topic_id}&article_title=subcategory_name&article_id=${articleInfo.article_id}`,
            params: {
                requestId: thunkAPI.requestId,
                _limit: 4,
                title_article: 'article_name',
                // article_id: article_id,
                // title: 'subcategory_name',
                // subcategory_id: queryString[0].subcategory_id
            },
            headers: {
                Authorization: 'Bearer my fetchArticlesData',
                'Content-Type': 'application/json',
                'Accept-Language': '*',
                'My-Custom-Header': 'fetchArticlesData'
            },
            data: [
                clientInformation
            ],
            responseEncoding: 'utf8'
        };

        try {

            const AxiosHTTP_client = new HttpService(BASE_API_URL, "GET", axios_instance_config);
            const response = await AxiosHTTP_client.get(BASE_API_URL, "GET", clientInformation)
            console.log('AxiosHTTP_client:', response);
            /* 
            const response = await axios.get(`${BASE_API_URL}/article?topic_title=topic_name&topic_id=${articleInfo.topic_id}&article_title=subcategory_name&article_id=${articleInfo.article_id}`);
            console.log('response fetchArticlesData():', response.data[0].data);
             */
            return response.data[0];

        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
)

const initialState = () => ({
    articles: [],
    status: 'idle',
    errors: [],
    message: '',
    isLoading: false,
    // status: undefined,
    statusLoading: 'idle', // 'loading'/pending, 'succeeded'/(fulfilled), failed / 'Rejected'
    statusMessage: null,
    statusCode: undefined
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        articlesStoreReseted: (state) => initialState(),
        disableLoading: (state, action) => {
            state.isLoading = false;
        },
        enableLoading: (state, action) => {
            console.log('enableLoading:', action)
            // state.isLoading = true;
        },
        updateArticles: (state, action) => {
            const { name } = action.payload;
            return name;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticlesData.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchArticlesData.fulfilled, (state, { payload }) => {
                // console.log('succeeded:', payload.data.article)
                state.status = 'succeeded';
                state.articles.push(payload.data.article);
            })
            .addCase(fetchArticlesData.rejected, (state, action) => {
                console.log('failed:', action)
                state.status = 'failed'
                // state.error = action.error.message
                switch (action ?.response ?.status) {
                    case 401:
                        state.errors.push({ error: "Access denied." });
                        break;
                    case 403:
                        state.errors.push({ error: "Forbidden." });
                        break;
                    default:
                        state.errors.push(action);
                        break;
                }
            })
    }
});

export const { actions: { articlesStoreReseted, disableLoading, enableLoading, updateArticles } } = articlesSlice;

export default articlesSlice;

// Access to configureStore Reducer types is one of these features:
export const selectAllArticles = state => state.articles; // Get All Article

export const selectArticlesById = (state, topicId) => {
    return state.articles.articles.find(articles => articles.id === topicId); // Get All Article
}