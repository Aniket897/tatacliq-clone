const Filter = () => {
  return (
    <div className="max-md:hidden w-[200px] bg-white p-4 rounded-md shadow-sm border">
      <div className="space-y-3">
        <p>Price Range:</p>
        <ul className="space-y-3 ml-3">
          <li className="flex items-center gap-4 p-2">
            <input type="radio" />
            100 - 500
          </li>
          <li className="flex items-center gap-4 p-2">
            <input type="radio" />
            500 - 1000
          </li>
          <li className="flex items-center gap-4 p-2">
            <input type="radio" />
            above 1000
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
