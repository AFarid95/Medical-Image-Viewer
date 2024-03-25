import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  imageIDs: [],
  status: 'idle',
  error: null
}

export const fetchImageIDs = createAsyncThunk(
                              'imageIDs/fetchImageIDs',
                              async () => {
  await new Promise(r => setTimeout(r, 1000));
  const response = await axios.get('http://localhost:5000/imageIDs');
  return response.data
})

const imageIDsSlice = createSlice({
  name: 'imageIDs',
  initialState,
  reducers: {
    imageUploaded(state, action) {
      if (!state.imageIDs.includes(action.payload))
        state.imageIDs.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImageIDs.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchImageIDs.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.imageIDs = state.imageIDs.concat(action.payload)
      })
      .addCase(fetchImageIDs.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { imageUploaded } = imageIDsSlice.actions

export const selectAllImageIDs = state => state.imageIDs.imageIDs

export default imageIDsSlice.reducer