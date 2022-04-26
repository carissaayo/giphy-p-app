import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGiphyDetails } from "../context/giphyContext";
import Error from "./Error";

const GiphyDetails = () => {
  const { gifId } = useParams();
  let dispatch = useDispatch();
  let giphyState = useSelector((state) => state["giphy"]);
  const { singleGifDetails, error } = giphyState;

  useEffect(() => {
    dispatch(getGiphyDetails(gifId));
  }, [gifId]);

  return (
    <div className="m-4 pt-5 text-center ">
      {error && <Error />}

      {singleGifDetails && (
        <div>
          <img
            src={singleGifDetails.images?.fixed_height_still.url}
            alt="gif"
          />
          <h4 className="m-4 text-white">Name: {singleGifDetails?.title}</h4>
          <p className="m-4 text-white ">Id:{singleGifDetails?.id}</p>
          <p className="m-4 text-white">
            Visit{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-info cursor-pointer "
              href={getGiphyDetails.url}
            >
              Url
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default GiphyDetails;
