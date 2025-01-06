import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../../Components/TitleSection/TitleSection";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { RiAdminFill } from "react-icons/ri";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = (user) => {
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
        axiosSecure.delete(`/user/${user}`).then((res) => {
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

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <TitleSection
        heading="How Many"
        subHeading="manage all users"
      ></TitleSection>

      <div className="px-6">
        <h2 className="text-4xl font-semibold">Total Users : {users.length}</h2>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr className="hover" key={user._id} user={user}>
                    <th>{idx + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        <>
                          <button className="btn flex justify-center items-center gap-1 bg-[#D1A054] font-semibold text-lg">
                            <RiAdminFill></RiAdminFill> Admin
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn bg-[#D1A054]"
                          >
                            <FaUsers className="text-2xl"></FaUsers>
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn bg-[#D1A054]"
                        onClick={() => handleDelete(user._id)}
                      >
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
    </div>
  );
};

export default AllUsers;
