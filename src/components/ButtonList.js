import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonList = () => {
  const butttonName = [
    "All",
    "Music",
    "React",
    "Javascript",
    "Trailers",
    "Cricket",
    "Movies",
    "News",
    "Tech",
    "Live",
    "Dramedy",
    "History",
    // "Sports",
    // "Podcast",
    // "Gaming",
    // "Gadgets",
  ];
  return (
    <div className="flex justify-evenly overflow-x-auto">
      {butttonName.map((button, index) => (
        <Link key={button} to={"/results?search_query=" + button}>
          <Button key={index} name={button} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
