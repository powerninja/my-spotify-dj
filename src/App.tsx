// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DJMode from "./pages/DJMode";
import Callback from "./pages/Callback";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dj" element={<DJMode />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
