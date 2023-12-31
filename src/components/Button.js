const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 p-2 m-1 bg-gray-200 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
