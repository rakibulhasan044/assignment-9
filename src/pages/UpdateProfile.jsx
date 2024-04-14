import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import toast from 'react-hot-toast';



const UpdateProfile = () => {
    const {profileUpdate} = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        //const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        profileUpdate(name, photourl)
        .then(toast.success('profile updated'))
        .catch(error => {
            console.log(error.message);
            toast.error(error.message);
        })

        // emailUpdate(email)
        // .then(console.log('email updated'))
        // .catch(error => {
        //     console.log(error.message);
        // })
    }
    return (
        <div>
            <p className="text-center font-semibold">Update your profile information</p>
        <form 
        onSubmit={handleUpdate}
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
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="photourl"
              name="photourl"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    );
};

export default UpdateProfile;