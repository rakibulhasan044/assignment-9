import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import userpng from "/assets/userpng.png"

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="min-h-[calc(100vh-160px)]">
      <div className="text-center mt-10 flex justify-center">
      <div className="bg-purple-200 md:w-2/4 p-14  md:p-28 rounded-xl">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL || userpng} />
        </div>
      </div>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
