import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import PageTitle from "./PageTitle";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const { signIn, googleLogin, githubLogin, user, setUser } = useContext(AuthContext);
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

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);
      toast.success('Login Successfully')
      setUser({...user, displayName: result.user?.displayName, photoURL: result.user?.photoURL})
      console.log(result.user?.photoURL);
    })
    .catch((error) => {
      console.log(error.message);
      toast.error(error.message)
    });
  }

  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      console.log(result.user);
      toast.success('Login Successfully')
      setUser({...user, displayName: result.user?.displayName, photoURL: result.user?.photoURL})
      console.log(result.user?.photoURL);
    })
    .catch((error) => {
      console.log(error.message);
      toast.error(error.message)
    });
  }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col py-10 md:py-20" data-aos="flip-up">
      <PageTitle title={"Sing In"}/>
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
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold">Or login With</h1>
        <ul className="flex gap-10 items-center justify-center">
          <li onClick={handleGoogleLogin}><FaGoogle size={30}/></li>
          <li onClick={handleGithubLogin}><FaGithub size={30}/></li>
        </ul>
        <p>
          Do not have an account?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register here
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Login;
