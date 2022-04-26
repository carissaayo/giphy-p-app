import { useEffect } from "react";
import Giphys from "./components/Giphys";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGiphy } from "./context/giphyContext";
import GiphyDetails from "./components/GiphyDetails";
const App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGiphy());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/gifs/:gifId" element={<GiphyDetails />} />
        <Route path="/" element={<Giphys />} />
      </Routes>
    </div>
  );
};

export default App;
