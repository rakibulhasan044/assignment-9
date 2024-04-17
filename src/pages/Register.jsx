import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import PageTitle from "./PageTitle";
const Register = () => {
  const { createUser, user, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;

    if (!lengthRegex.test(password)) {
      toast.error("Password must be at least 6 characters long.");
      return;
    } 
    if (!uppercaseRegex.test(password)) {
      toast.error("Password must contain an uppercase letter.");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast.error("Password must contain a lowercase letter.");
      return;
    }
    
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("SuccessFully registered");
        setUser({ ...user, displayName: name, photoURL: photourl });
        console.log(name, email, photourl);
        console.log("hello");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-[calc(100vh-136px)] md:min-h-[calc(100vh-116px)]">
      <PageTitle title={"New Registration"}/>
      <form
        onSubmit={handleRegister}
        className="card-body md:w-3/4 lg:w-2/4 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
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
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            type="text"
            placeholder="photourl"
            name="photourl"
            className="input input-bordered"
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={show ? "text" : "password"}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <span
            className="absolute top-[52px] right-[10%]"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center">
        <p>
          Already have an account?
          <Link to="/login" className="text-primary font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
