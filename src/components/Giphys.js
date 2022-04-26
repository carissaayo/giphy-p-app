import Loader from "./Loader";
import Search from "./Search";
import MyGiphys from "./MyGiphys";
import Error from "./Error";
import { useSelector } from "react-redux";

const Giphy = () => {
  let giphyState = useSelector((state) => state.giphy);
  const { error, pending, data } = giphyState;

  return (
    <div className="m-2">
      {error && <Error />}
      <Search />
      {pending && <Loader />}
      {data && <MyGiphys />}
    </div>
  );
};

export default Giphy;
