import postSlice from "./post.slice";
import userSlice from "./userSlice"

const rootReducer = {
    user:userSlice,
    post:postSlice
} 

export default rootReducer;