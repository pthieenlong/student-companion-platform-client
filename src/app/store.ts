import { configureStore } from "@reduxjs/toolkit"
import { loginReducer } from "../features/auth"
import { userReducer } from "../features/user"
export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
