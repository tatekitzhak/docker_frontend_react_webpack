import { createSlice } from '@reduxjs/toolkit';
// project imports
import config from 'config';

export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};

const customizationSlice = createSlice({
    name: 'authUser',
    initialState: {
        isOpen: [], // for active default menu
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
        opened: true
    },
    // actions types
    reducers: {
        menu_open: (state, action) => {
            state.isOpen = [action.payload.id];
        },
        set_menu: (state, action) => {
            state.opened = action.payload;
        },
        set_font_family(state, action) {
            state.fontFamily = action.payload;
        },
        set_border_radius(state, action) {
            state.borderRadius = action.payload;
        }
    }
});

// The actions that generated from the slice
export const { menu_open, set_menu, set_font_family, set_border_radius } = customizationSlice.actions;

export default customizationSlice.reducer;
