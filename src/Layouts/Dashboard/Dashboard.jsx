import { FaCartShopping, FaEnvelope, FaRegCalendarDays } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdOutlinePayment, MdRateReview, MdShoppingBag } from "react-icons/md";
import { PiCalendarPlusFill } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-52 min-h-screen bg-[#D1A054] py-3">
        <h2 className="text-center text-xl -ml-6 font-bold">
          BISTRO BOSS <br /> RESTAURANT
        </h2>
        <div className="list-none pl-4 pt-6">
          <li className=" mb-4">
            <NavLink className="flex items-center gap-2 text-lg font-semibold">
              {" "}
              <IoMdHome className="text-2xl"></IoMdHome>
              User Home
            </NavLink>
          </li>

          <li className=" mb-4">
            <NavLink className="flex items-center gap-2 text-lg font-semibold">
              {" "}
              <FaRegCalendarDays className="text-2xl"></FaRegCalendarDays>
              Reservation
            </NavLink>
          </li>

          <li className=" mb-4">
            <NavLink className="flex items-center gap-2 text-lg font-semibold">
              {" "}
              <MdOutlinePayment className="text-2xl"></MdOutlinePayment>
              Payment History
            </NavLink>
          </li>

          <li className=" mb-4">
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              {" "}
              <FaCartShopping className="text-2xl"></FaCartShopping>
              My Cart
            </NavLink>
          </li>

          <li className=" mb-4">
            <NavLink className="flex items-center gap-2 text-lg font-semibold">
              {" "}
              <MdRateReview className="text-2xl"></MdRateReview>
              Add Review
            </NavLink>
          </li>

          <li className=" mb-4">
            <NavLink className="flex items-center gap-2 text-lg font-semibold">
              {" "}
              <PiCalendarPlusFill className="text-2xl"></PiCalendarPlusFill>
              My Booking
            </NavLink>
          </li>
        </div>

        <div className="divider w-[90%] mx-auto"></div>

        <div className="list-none pl-4 ">
          <li className=" mb-4">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <IoMdHome className="text-2xl"></IoMdHome>
              Home
            </NavLink>
          </li>

          <li className=" mb-4">
            <NavLink
              to="/menu"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <IoMenu className="text-2xl"></IoMenu>
              Menu
            </NavLink>
          </li>

          <li className=" mb-4">
            <NavLink
              to="/shop/salad"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <MdShoppingBag className="text-2xl"></MdShoppingBag>
              Shop
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              to="/contact"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <FaEnvelope className="text-2xl"></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </div>
      </div>
      <div className="min-w-[calc(100vw-208px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
