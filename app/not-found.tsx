import React from "react";
import { Link } from "./components";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">There was a problem</h2>
      <p>We couldn&apos;t find the page you where looking for</p>
      <p>
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </div>
  );
};

export default NotFound;
