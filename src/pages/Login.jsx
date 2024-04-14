import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [show, setShow] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('Login Successfully')
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message)
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="card-body md:w-3/4 lg:w-2/4 mx-auto"
      >
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
        <hr className="mt-5" />
      </form>
      <div className="text-center">
        <h1 className="text-xl font-bold">Or login With</h1>
        <ul className="flex gap-10 items-center justify-center">
          <li>Google</li>
          <li>Github</li>
        </ul>
        <p>
          Do not have an account?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
