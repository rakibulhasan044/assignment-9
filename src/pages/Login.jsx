import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <form className="card-body md:w-3/4 lg:w-2/4 mx-auto">
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
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          className="input input-bordered"
          required
        />
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
        <p>Do not have an account? <Link to='/register' className="text-primary font-semibold">Register here</Link></p>
    </div>
    </div>
  );
};

export default Login;
