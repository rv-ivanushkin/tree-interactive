import { configureStore } from '@reduxjs/toolkit'
import { modeSlice } from 'src/features/ToggleTheme'

export const store = configureStore({
  reducer: {
    [modeSlice.name]: modeSlice.reducer,
  },
})
