// Store is like a mini temp place to store the DB state does not live in the database. It lives in the client or browser

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/RootSlice'

export const store = configureStore({
    reducer,
    devTools: true,
})

export default store;