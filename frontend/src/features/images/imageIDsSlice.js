import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const imageIDsSlice = createSlice({
  name: 'imageIDs',
  initialState,
  reducers: {
    imageUploaded(state, action) {
      if (!state.includes(action.payload))
        state.push(action.payload)
    }
  }
})

export const { imageUploaded } = imageIDsSlice.actions

export const selectAllImageIDs = state => state.imageIDs

export default imageIDsSlice.reducer