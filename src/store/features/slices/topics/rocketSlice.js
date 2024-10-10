// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// /**
//  * https://medium.com/@learnwithalfred/react-with-redux-toolkit-and-createasyncthunk-complementary-guide-c3a3bb2a1113
//  * https://github.com/learnwithalfred/space-travel-booking
//  */

// const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

// export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
//     const response = await axios.get(ROCKET_URL);
//     return response.data;
// });

// const initialState = {
//     rockets: [],
//     status: '',
//     error: null
// };

// const rocketsSlice = createSlice({
//     name: 'rockets',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchRockets.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchRockets.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 console.log('action.payload:', action.payload);
//                 state.rockets.push(action.payload);
//             })
//             .addCase(fetchRockets.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     }
// });

// export const selectAllRockets = (state) => state.rockets;
// export const getRocketsStatus = (state) => state.rockets.status;
// export const getRocketsError = (state) => state.rockets.error;

// export default rocketsSlice.reducer;
