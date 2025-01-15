import { Route, Routes } from "react-router";
import "./App.css";
import "./responsive/responsive.css";
import PostListPage from "./Pages/PostListPage";
import Navbar from "./components/Navbar";
import PostDetailPage from "./Pages/PostDetailPage";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <Navbar counter={counter}></Navbar>
      <Routes>
        <Route
          path="/"
          element={<PostListPage handleCounter={handleCounter} />}
        ></Route>
        <Route path="/blog/:id" element={<PostDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
