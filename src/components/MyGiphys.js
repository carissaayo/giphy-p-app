import Giphy from "./Giphy";
import { useSelector } from "react-redux";

const MyGiphys = () => {
  let giphyState = useSelector((state) => state["giphy"]);
  const { data } = giphyState;

  return (
    <div className="container gifs ">
      {data && data?.map((gif) => <Giphy key={gif.id} gif={gif} />)}
    </div>
  );
};

export default MyGiphys;
