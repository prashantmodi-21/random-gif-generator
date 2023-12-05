import './App.css'
import Random from './components/Random_V1'
import Tag from './components/Tag_V1'
function App() {

  return (
    <>
    <h1>React Gif Application</h1>
    <div className="main-container">
      <Random/>
      <Tag/>
    </div>
    </>
  )
}

export default App
