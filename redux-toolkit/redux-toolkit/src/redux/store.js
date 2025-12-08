import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

setupListeners(store.dispatch)

/*

RTK: redux toolkit
step:
    create store
    wrap app component under Provider
    create slice
    register reducer in store
 */


/*
A thunk is a function that allows you to write asynchronous logic (API calls, timers, database calls, etc.) in Redux.
Normally, Redux reducers must be pure and synchronous.
But real applications need async operations (fetch data from backend, login, etc.).
Thunk lets Redux handle async code.

Redux Toolkit includes redux-thunk by default — you don’t need to install it or add middleware.
So you can immediately write async functions using:createAsyncThunk()

Redux only handles synchronous updates, so we need thunks to handle async tasks like:
    Fetching data from an API
    Logging in a user
    Posting data to a server
    Delaying an action
    ing multiple dispatches in order

A thunk is basically a function that:
    Returns another function
    That inner function receives dispatch and getState
    You can run async code inside it
    When done, you dispatch normal actions

 */