import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  console.log(children);
  if (!children) return null;

  return <p className="text-red-500 mt-2">{children}</p>;
};

export default ErrorMessage;
