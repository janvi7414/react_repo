import { configureStore , combineReducers} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

setupListeners(store.dispatch)

/*
step:
    create store
    wrap app component under Provider
    create slice
    register reducer in store
 */