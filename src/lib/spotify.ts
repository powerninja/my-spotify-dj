
  interface SpotifyTrack {
    name: string;
    artists: Array<{ name: string }>;
  }

  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
  const token = 'BQA-U_zWbMaNqknJOE-5oV0H5iO3ykxo2cWYLmlRVv_cRM1CxtEZBGBnnmsXVmyO3tWwyw2-W-lru_nS1IX__Ue2G0TrtvkaDnsjxVzkFSxXCexwX6ATKKhHYzTwcdHufKPD7tX9r9TlfOOgRnmjmdgDkUTUDi_GaDwtmbRzrKRjpA7e_Ft_ct8fb8hmqDjOjNvwWhf3VHh4Lool5V9tPnskck9ha5jv_d4mFliZEftuX_Y8ERngBUqqOZUNJCnC00_aB3bF9gkMbsrv5olxdY_03GwDQkt-SxaA4K0VY46Zb9nXCsVNz_pG';

  async function fetchWebApi(endpoint: string, method: string, body: string) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body:JSON.stringify(body)
    });
    return await res.json();
  }

  async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=5', 'GET', ''
    )).items;
  }

  const topTracks = await getTopTracks();
  console.log(
    topTracks?.map(
      ({name, artists}: SpotifyTrack) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
  );