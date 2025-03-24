/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from "@reduxjs/toolkit"

interface User {
  id: string
  username: string
}

interface AuthState {
  isLogin: boolean
  user: User | null
  error: string | null
}

const initialState: AuthState = {
  isLogin: false,
  user: null,
  error: null,
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.isLogin = action.payload.success
      state.user = {
        id: action.payload.id,
        username: action.payload.username,
      }
      state.error = action.payload.message
    },
  },
})
export const { setLoginState } = loginSlice.actions

export default loginSlice.reducer
