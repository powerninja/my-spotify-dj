

  const BASE_URL = "https://api.spotify.com/v1";
  interface SpotifyTrack {
    name: string;
    artists: Array<{ name: string }>;
  }

  export async function getTopTracks(token: string) {
    const res = await fetch(`${BASE_URL}/me/top/tracks?limit=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data.items;
  }

  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
  const token = '';

  async function fetchWebApi(endpoint: string, method: string) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method
    });
    return await res.json();
  }

  async function getTopTrackss(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
  }

  const topTracks = await getTopTrackss();
  console.log(
    topTracks?.map(
      ({name, artists}: SpotifyTrack) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
  );

  export { getTopTrackss };