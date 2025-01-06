import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        name: res.user.displayName,
        email: res.user.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div onClick={handleGoogleSignIn} className="py-6 w-11/12 mx-auto">
      <button className=" btn w-full flex justify-center items-center gap-3">
        {" "}
        <FaGoogle></FaGoogle> Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
