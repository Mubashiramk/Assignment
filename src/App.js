import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/indexs";
import Explore from "./Pages/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
