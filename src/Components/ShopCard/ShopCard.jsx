import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ShopCard = ({ item }) => {
  const { image, recipe, name, price, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(food);
      const cartItem = {
        cartId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/addCart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Cart Added Successfully",
            icon: "success",
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "User Have to logged in",
        text: "Please Login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div>
        <div className="card shadow-xl relative">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">{name}</h2>
            <p className="text-center">{recipe}</p>
            <p className="text-center font-semibold bg-black text-white absolute top-5 right-4 px-4 py-1">
              Price: ${price}
            </p>
            <div className="card-actions justify-center">
              <button
                onClick={() => handleAddToCart(item)}
                className="px-4 py-2 rounded-lg text-white bg-[#1c1c1ccd]"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
