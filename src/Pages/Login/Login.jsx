import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../SharedFiles/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../SharedFiles/SocialLogin/SocialLogin";
const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero">
      <div className="hero-content w-3/4">
        <div className="card w-full shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <LoadCanvasTemplate />
            </div>
            <div className="form-control">
              <input
                onBlur={handleCaptcha}
                type="text"
                name="captcha"
                placeholder="Type Here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="Login"
                className="btn btn-primary"
              />
            </div>

            <div>
              <p className="text-center">
                New to this account?{" "}
                <span className="text-blue-500 font-semibold">
                  <Link to={"/register"}>Register</Link>
                </span>
              </p>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
