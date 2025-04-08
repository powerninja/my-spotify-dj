export function useSpotifyAuth() {
  const token = localStorage.getItem("access_token");
  const isAuthenticated = !!token;
  return { token, isAuthenticated };
}
