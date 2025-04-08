import reactLogo from '../assets/react.svg'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <button onClick={() => navigate('/dj')}>DJ Mode</button>
  </>
  )
}

export default Home;