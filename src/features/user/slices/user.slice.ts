/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../types/IUser"
interface UserState {
  data: null | IUser
  isFetching: boolean
  error: unknown
}

const initialState: UserState = {
  data: null,
  isFetching: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.isFetching = true
      state.error = null
    },
    fetchUserSuccess(state, action: PayloadAction<IUser>) {
      state.data = action.payload
      state.isFetching = false
    },
    fetchUserFailure(state, action: PayloadAction<IUser> | any) {
      state.error = action.payload
      state.isFetching = false
    },
  },
})

export const { fetchUserFailure, fetchUserStart, fetchUserSuccess } =
  userSlice.actions
export default userSlice.reducer
