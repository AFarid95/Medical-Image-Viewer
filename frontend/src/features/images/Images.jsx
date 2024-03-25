import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllImageIDs } from './imageIDsSlice'

export const Images = () => {
  const imageIDs = useSelector(selectAllImageIDs)

  return (
    <div>
      <h2>Images</h2>
      <ul>
        {imageIDs.map(imageID => (
          <li key={imageID}>{imageID}</li>
        ))}
      </ul>
    </div>
  )
}