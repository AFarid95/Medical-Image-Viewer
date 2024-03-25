import { configureStore } from "@reduxjs/toolkit"

import imageIDsReducer from '../features/images/imageIDsSlice'

export default configureStore({
  reducer: {
    imageIDs: imageIDsReducer
  }
})