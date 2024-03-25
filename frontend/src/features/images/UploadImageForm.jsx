import { useState } from "react"
import { useDispatch } from 'react-redux'
import axios from "axios"
import { imageUploaded } from './imageIDsSlice'

const UploadImageForm = () => {
  const [image, setImage] = useState()
  const [isUploadButtonDisabled, setUploadButtonDisabled] = useState(false)

  const dispatch = useDispatch()

  function handleUploadedImageChange(event) {
    let files = event.target.files
    if (files != null)
      setImage(files[0])
  }

  function uploadImage(event) {
    event.preventDefault();

    if (image) {
      const formData = new FormData()
      formData.append("image", image)
      
      setUploadButtonDisabled(true)

      axios.post("http://localhost:5000/images",
        formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          }
        })
        .then (() => {
          dispatch(imageUploaded(image.name))
        })
        .finally(() => {
          setUploadButtonDisabled(false)
        })
    }
  }

  return (
    <div className="App">
      <form encType="multipart/form-data" onSubmit={uploadImage}>
        <label htmlFor="image">Upload a DICOM (.dcm) image: </label>
        <input type="file"
          name="image"
          accept=".dcm"
          onChange={handleUploadedImageChange}
          required />
        <button type="submit" disabled={isUploadButtonDisabled}>Upload</button>
      </form>
    </div>
  )
}

export { UploadImageForm }
