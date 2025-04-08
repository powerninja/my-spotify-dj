import reactLogo from '../assets/react.svg'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { getTopTracks } from '../lib/spotify'
import { useState } from 'react';

function Home() {

  interface SpotifyTrack {
    name: string;
    artists: Array<{ name: string }>;
    id: string;
  }


  const navigate = useNavigate();
  const clientId = "376d1b90052b4f14beffe724d5323048";
  const redirectUri = "http://localhost:5173/callback";
  const scopes = ["user-top-read"].join(" ");

  const authUrl = `https://accounts.spotify.com/authorize?` +
  `client_id=${clientId}&response_type=token&` +
  `redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&show_dialog=true`;

  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const token = localStorage.getItem("access_token");

  const handleClick = async () => {
    try {
      if (!token) {
        console.error("No access token found");
        return;
      }
      const topTracks = await getTopTracks(token);
      setTracks(topTracks);
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
    <ul>
        {tracks.map(({ name, artists }) => (
          <li key={name}>
            {name} by {artists.map((a) => a.name).join(", ")}
          </li>
        ))}
      </ul>
  </>
  )
}

export default Home;