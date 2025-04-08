// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DJMode from "./pages/DJMode";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dj" element={<DJMode />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
