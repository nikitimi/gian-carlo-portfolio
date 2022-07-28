import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

// Define a type for the slice state
interface Portfolio {}

// Define the initial state using that type
const initialState: Portfolio = {}

export const portfolio = createSlice({
  name: "portfolio",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    display: (state, action: PayloadAction<number>) => {
      null
    },
  },
})

export const { display } = portfolio.actions

export default portfolio.reducer
