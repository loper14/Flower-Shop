import { useSelector } from "react-redux";

const Search = () => {
  let { searchedData } = useSelector((state) => state.data);
  return (
    <div>
      {searchedData?.map((value) => (
        <div key={value.id}>{value.name}</div>
      ))}
    </div>
  );
};

export default Search;
