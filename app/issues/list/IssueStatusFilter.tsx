"use client";

import React, { useState, useRef } from "react";
import { Status } from "@prisma/client";
import { IoIosArrowDown } from "react-icons/io";
import useClickOutside from "@/app/helpers/clickOutside";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const [isToggled, setToggle] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setToggle(false));

  return (
    <div
      className="w-full mx-auto mb-2 cursor-pointer bg-gray-100"
      onClick={() => setToggle(!isToggled)}
    >
      <button
        type="button"
        className={`flex items-center w-full justify-between text-gray-500 border-[1px] focus:border-2 focus:border-blue-500 border-gray-300 py-2 px-4 h-12 min-w-max rounded`}
      >
        {"Filter by status"}
        <IoIosArrowDown
          size={23}
          color="#6b7280"
          className={`transition-transform duration-75 ease-in-out ${
            isToggled ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isToggled && (
        <div
          className="w-full my-2 py-2 px-4 mx-auto cursor-pointer flex flex-col divide-y bg-gray-100 border-[1px] border-gray-300 rounded"
          ref={ref}
        >
          <p className="text-gray-500 text-sm mb-2">Suggestions</p>
          <ul className="">
            {statuses?.map((status, i) => {
              return (
                <li
                  key={i}
                  className="mt-2 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-300"
                  value={status?.value || ""}
                >
                  {status?.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IssueStatusFilter;
