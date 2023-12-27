import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ item, title, img, _id }) => {
  return (
    <div className="p-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid lg:grid-cols-2 gap-12 mb-8 px-2 my-16">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4 btn-secondary">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
