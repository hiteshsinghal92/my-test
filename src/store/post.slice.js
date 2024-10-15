import { createSlice } from "@reduxjs/toolkit";

const init = {
    post: []
};

const postSlice = createSlice({
    name: "post",
    initialState: init,
    reducers: {
        getPost: (state, action) => {
            console.log("🚀 Updating state with:", action.payload);
            state.post = action.payload;
        }
    }
});

export const { getPost } = postSlice.actions;
export default postSlice.reducer;
