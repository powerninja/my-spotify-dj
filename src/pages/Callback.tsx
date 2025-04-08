import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.slice(1)); // "#"を取り除く
    const token = params.get("access_token");

    if (token) {
      localStorage.setItem("access_token", token);
      // トークン保存完了後、ホームなどへリダイレクト
      navigate("/");
    }
  }, []);

  return <p>ログイン処理中...</p>;
}