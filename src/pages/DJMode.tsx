import viteLogo from '../../public/vite.svg'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function DJMode() {
  const navigate = useNavigate();
  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/
  return (
    <>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <button onClick={() => navigate('/')}>Home</button>
    </>
  )
}

export default DJMode;