import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import rootSaga from "./rootSaga"; // Corrected typo here

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware), // Use a callback to include the saga middleware
});

sagaMiddleware.run(rootSaga);

export default store;
