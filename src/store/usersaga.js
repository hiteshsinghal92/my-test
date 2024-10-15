import { all, cancel, cancelled, put, take, takeLatest } from "redux-saga/effects";
import { GET_USER_BY_ID, getUserSuccessAction, getUserErrorAction } from "./userSlice";
import { getPost } from "./post.slice";

function* getUserSaga(action) {
    console.log("🚀 Action received:", action);
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${action.payload}`);
        const data = yield response.json();
       // console.log("🚀 Todo Data:", data);

        yield put(getUserSuccessAction(data)); // Dispatch success action with the fetched data

        // Fetch posts with the payload as part of the URL
        const res = yield fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`);
        const data1 = yield res.json();
       // console.log("🚀 Post Data:", data1);

        yield put(getPost(data1)); // Dispatch the post data

    } catch (error) {
       // console.error("🚀 Error:", error.message);
        yield put(getUserErrorAction(error.message)); // Dispatch error action with the error message
    }
    finally{
      if(yield cancelled()){
        // console.log("Call Cancelled");
      }
    }
}

// function* getUserSaga(action){
//    const [data1, data2] = yield all([
//       fetch(`https://jsonplaceholder.typicode.com/posts`),
//       fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`)
//    ]);
//    console.log("data2",data2);
//    console.log("data1",data1);
 
// }


export function* watchGetUser() {
    console.log("watchGetUser initialized");
   const task = yield takeLatest(GET_USER_BY_ID, getUserSaga); // Listen for the correct action
  
   //yield cancel(task);
}
