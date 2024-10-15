import { createSlice } from "@reduxjs/toolkit";

const userInitiate = {
        data: null,
        isLoading: false,
        errors: ''
    
};

export const GET_USER_BY_ID = 'user/getUserAction'; // Custom action type for triggering saga

const userSlice = createSlice({
    name: 'user',
    initialState: userInitiate,
    reducers: {
        getUserAction: (state) => {
            state.isLoading = true;
            state.errors = '';
        },
        getUserSuccessAction: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        getUserErrorAction: (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
        },
        updateName: (state, action) => {
            console.log(state, action)
            state.data = {...state.data, title:action.payload}
        }
    }
});

export const {
    getUserAction,
    getUserSuccessAction,
    getUserErrorAction,
    updateName
} = userSlice.actions;

export default userSlice.reducer;
