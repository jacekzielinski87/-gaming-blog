import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import OdysseyPost from "./Pages/Posts/OdysseyPost";
import Main from "./components/Main";


function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts/assassins-creed-odyssey" element={<OdysseyPost />} />
      </Routes>
    </div>
  );
}

export default App;