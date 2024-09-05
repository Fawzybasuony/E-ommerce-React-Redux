import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Radox/mydataSlice'

export const store = configureStore({
  reducer: { counter: counterReducer,},
})