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
    "Tech",
    // "Cars",
    "Bikes",
    "Dramedy",
    "History",
    "Sports",
    "Podcast",
    "Gaming",
    // "Gadgets",
    // "Discovery",
  ];

  return (
    <div className="flex ml-12 bg-white max-w-screen hover:overflow-y-scroll overflow-hidden overscroll-contain">
      {butttonName.map((button, index) => (
        <Link key={button} to={"/results?search_query=" + button}>
          <Button key={index} name={button} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
