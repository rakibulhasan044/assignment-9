import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const UserProfile = () => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <div className="loading loading-spinner text-error w-[60px]"></div>
      </div>
    );
  }

  return (
    <div className="text-center mt-10 flex justify-center">
      <div className="bg-purple-200 md:w-2/4 p-14  md:p-28 rounded-xl">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
