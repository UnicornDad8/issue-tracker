import React from "react";
import Skeleton from "../Skeleton";

const LoadingAvatar = () => {
  return (
    <div className="w-14 h-14 cursor-pointer rounded-full overflow-hidden">
      <Skeleton width="14px" height="14px" />
    </div>
  );
};

export default LoadingAvatar;
