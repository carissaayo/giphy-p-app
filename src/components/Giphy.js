import { Link } from "react-router-dom";
const Giphy = ({ gif }) => {
  return (
    <Link to={`gifs/${gif?.id}`} className="gif p-2">
      <img
        className="img-responsive"
        src={gif?.images.fixed_height.url}
        alt="gif"
      />
    </Link>
  );
};

export default Giphy;
