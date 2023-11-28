import React from "react";

const Avatar = ({ user }) => {
  return (
    <div className="w-10 h-10 cursor-pointer rounded-full overflow-hidden border-4 border-blue-500 shadow-black shadow-2xl">
      {user ? (
        <img
          className="w-full h-full object-contain"
          src={user?.image}
          alt="avatar"
        />
      ) : (
        <div className="flex w-full h-full bg-gray-400 text-white items-center justify-center font-bold">
          {user?.name[0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;
