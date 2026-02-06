import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./styles/scss/main.scss";
import Home from "./pages/Home";
import useLenis from "./hooks/useLenis";

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirectPath = params.get("p");
  useLenis();

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/wedding' replace />} />
      <Route path='/wedding' element={<Home />} />
    </Routes>
  );
}

export default App;
