import { AiTwotoneDelete } from "react-icons/ai";
import TitleSection from "../../../Components/TitleSection/TitleSection";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${id}`).then(async (res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <TitleSection
        heading="Hurry Up!!"
        subHeading="Manage all items"
      ></TitleSection>
      <div>
        <h2 className="text-4xl font-semibold px-6 py-4">
          Total Items : {menu.length}
        </h2>
        <div className="overflow-x-auto px-6">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item) => (
                <tr key={item._id} item={item}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt="Item image" />
                      </div>
                    </div>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghosts"
                    >
                      <AiTwotoneDelete></AiTwotoneDelete>
                    </button>
                  </th>
                  <th>
                    <Link to={`/dashboard/updateItems/${item._id}`}>
                      <button className="btn btn-ghosts">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
