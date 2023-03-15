import { useSelector } from "react-redux";

const Wishlist = () => {
  let { wishlist } = useSelector((state) => state.wishlist);
  return <div>{wishlist.map((value) => value.name)}</div>;
};

export default Wishlist;
