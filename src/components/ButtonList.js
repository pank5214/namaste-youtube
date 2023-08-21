import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Soccer",
  "Gaming",
  "Cooking",
  "Valentines",
  "Comedy",
  "Trailers",
  "Music"
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((lists, index) => (
        <Button key={index} name={lists} />
      ))}
    </div>
  );
};

export default ButtonList;
