import { useContext } from "react";
import { AuthContext } from "../../SharedFiles/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
    console.log(error);
      });
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-content w-3/4">
          <div className="card w-full shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
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

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p className="text-center">Already Have An account? <span className="text-blue-500 font-semibold"><Link to={"/login"}>Login</Link></span></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
