import { IUserData } from '@/services/product/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  user: IUserData | null
}

const initialState: UserState = {
  user: {
    id: 0,
    name: '',
    mail: '',
    point: 0,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
