import { RenderingEngine } from "@cornerstonejs/core"
import { UploadImageForm } from './features/images/UploadImageForm.jsx'
import { Images } from './features/images/Images.jsx'

const App = renderingEngine => {
  return (
    <div>
      <UploadImageForm />
      <Images />
    </div>
  )
}

export default App
