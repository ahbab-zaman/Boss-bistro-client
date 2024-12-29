import { Link } from "react-router-dom";
import Cover from "../../Components/Cover/Cover";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";

const MenuCategory = ({ items, title, coverImg, button }) => {
  return (
    <div>
      {title && (
        <Cover
          coverImg={coverImg}
          title={title}
          details={"would you like to try a dish"}
        ></Cover>
      )}
      <div className="grid grid-cols-2 gap-4 w-11/12 mx-auto my-12">
        {items.map((item) => (
          <PopularMenu key={item._id} item={item}></PopularMenu>
        ))}
      </div>
      <div className="flex justify-center items-center my-4">
        <Link>
          <button className="px-4 py-2 border-black border-b-2 rounded-xl font-bold ">
            Order Our Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
