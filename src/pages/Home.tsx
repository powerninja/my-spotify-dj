import reactLogo from '../assets/react.svg'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { getTopTrackss } from '../lib/spotify'
function Home() {
  const navigate = useNavigate();
  const clientId = "";
  const redirectUri = "http://localhost:5173/callback";
  const scopes = ["user-top-read"].join(" ");

  const authUrl = `https://accounts.spotify.com/authorize?` +
  `client_id=${clientId}&response_type=token&` +
  `redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&show_dialog=true`;

  const handleClick = async () => {
    try {
      const topTracks = await getTopTrackss();
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
    <button onClick={() => window.location.href = authUrl}>
        Spotifyでログイン
      </button>
  </>
  )
}

export default Home;