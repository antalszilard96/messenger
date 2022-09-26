import { configureStore } from "@reduxjs/toolkit";
import myProfileReducer from '../features/myprofilepost/postMySlice';
import msgReducer from '../features/msg/msgSlice';

export const store = configureStore({
    reducer: {
        post: myProfileReducer,
        msgs: msgReducer
    }
})