import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './taskSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    task: taskSlice,
    user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch