import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pasteArr: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    // In Redux, a reducer is a pure function that decides how the state changes in response to an action.
    addToPastesArr: (state) => {
      
    },
    updateToPastesArr: (state) => {
      
    },
    resetPastesArr: (state, action) => {
     
    },
    removeFromPasteArr: (state, action) => {

    }
  },
})

export const { addToPastesArr, updateToPastesArr, resetPastesArr, removeFromPasteArr } = pasteSlice.actions

export default pasteSlice.reducer

/**
 localStorage.getItem("pastes") attempts to read the value stored in the browser’s local storage under the key "pastes".

The ternary operator checks whether that value is truthy. If it is truthy:

JSON.parse(localStorage.getItem("pastes")) is executed, converting the stored JSON string back into a JavaScript value (typically an array or object).

If there is no value (i.e. getItem returned null) the expression falls back to an empty array [].

Result: initialState.pastes becomes either the previously saved array of pastes or an empty array if nothing was saved before.

here "pasteArr" is an array or a state property that stores a list of items in the app

Why this is commonly used

Persistence across reloads: localStorage survives page reloads and browser restarts. Using it for initialState allows the app to remember user data (here — pastes) between visits without a backend.

Better UX: Users don’t lose their data when they refresh or close the tab.

Simple persistence: It’s a zero-dependency, client-side mechanism that’s easy to implement.
 */