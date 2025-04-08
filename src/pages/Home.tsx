import reactLogo from '../assets/react.svg'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { getTopTracks } from '../lib/spotify'
function Home() {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const topTracks = await getTopTracks();
      console.log(topTracks);
      // setTracks(topTracks);
    } catch (err) {
      console.error("Error fetching tracks:", err);
    }
  };

  return (
    <>
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <button onClick={() => navigate('/dj')}>DJ Mode</button>
    <button onClick={handleClick}>Top Tracks を取得</button>
  </>
  )
}

export default Home;