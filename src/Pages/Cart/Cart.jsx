import { MdDeleteForever } from "react-icons/md";
import TitleSection from "../../Components/TitleSection/TitleSection";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <TitleSection
        heading={"My Cart"}
        subHeading={"wanna add more"}
      ></TitleSection>

      <div className="px-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Total Order: {cart.length}</h2>
        <h2 className="text-2xl font-bold">Total Price : ${totalPrice}</h2>
        <button className="px-4 py-2 bg-[#D1A054] text-white font-semibold">
          PAY
        </button>
      </div>
      <div className="px-8 py-4">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id} item={item} className="hover">
                  <th>{idx + 1}</th>
                  <td>
                    <img className="w-16 rounded-md" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn bg-[#D1A054]" onClick={() => handleDelete(item._id)}>
                      <MdDeleteForever className="text-2xl text-white"></MdDeleteForever>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
