import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllImageIDs, fetchImageIDs } from './imageIDsSlice'

export const Images = () => {
  const dispatch = useDispatch()

  const imageIDs = useSelector(selectAllImageIDs)
  const imageIDsStatus = useSelector(state => state.imageIDs.status)
  const error = useSelector(state => state.imageIDs.error)

  useEffect(() => {
    if (imageIDsStatus === 'idle') {
      dispatch(fetchImageIDs())
    }
  }, [imageIDsStatus, dispatch])

  let content

  switch (imageIDsStatus) {
    case 'loading':
      content = <div>Loading...</div>
      break
    case 'succeeded':
      content = <ul>
                  {imageIDs.map(imageID => (
                    <li key={imageID}>{imageID}</li>
                  ))}
                </ul>
      break
    case 'failed':
      content = <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>Images</h2>
      {content}
    </div>
  )
}