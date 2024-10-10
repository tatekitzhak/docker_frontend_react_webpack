import { combineReducers } from 'redux';

import categoriesSlice from '@/store/features/slices/categories/categoriesSlice';

/**
 * categories reducers
 */
const categoryReducer = combineReducers({
    categories: categoriesSlice
});

export default categoryReducer;
