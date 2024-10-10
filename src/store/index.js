import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import customizationSlice from './features/customizationCreateSlice';
import articlesSlice from '@/store/features/slices/articles/articlesSlice';
import { topicsSlice } from '@/store/features/slices/topics/topicsSlice';

import categoryReducer from './features/slices/index';
import { PersonSlice } from './features/slices/topics/secondTopicsSlice';

/**
 * https://codesandbox.io/p/sandbox/redux-toolkit-createasyncthunk-wrapper-useselector-memoized-1brm3?file=%2Fsrc%2Fpages%2Fabout%2FAbout.jsx%3A6%2C3-6%2C12
 * https://www.youtube.com/watch?v=qA6oyQQTJ3I&ab_channel=SanjeevThiyagarajan
 */
const loggerMiddleware = (store) => {
    return (next) => {
        return (action) => {
            // if( ENV.NODE_ENV_ == "development")
                console.log('loggerMiddleware:', action);
            return next(action);
        };
    };
};

const fetchApiMiddlewareLogger = (store) => {
    return (next) => {
        return (action) => {
            // if( ENV.NODE_ENV_ == "development")
                console.log('fetchApiMiddlewareLogger:', store.getState());
            return next(action);
        };
    };
};

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loggerMiddleware, fetchApiMiddlewareLogger]),
    reducer: {
        articles: articlesSlice.reducer,
        customization: customizationSlice,
        topics: topicsSlice.reducer,
        categoryReducer,
        person: PersonSlice.reducer
    }
});

function ReduxStoreWrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

export default ReduxStoreWrapper;
