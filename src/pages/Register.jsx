import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast'
const Register = () => {

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;
        console.log(name, email, photourl, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
            toast.success("SuccessFully registered")
        })
        .catch(error => {
            toast.error(error.message)
        })

    }
  return (
    <div>
      <form 
      onSubmit={handleRegister}
      className="card-body md:w-3/4 lg:w-2/4 mx-auto">
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
            type={show? "text" : "password"}
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
