"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useClickOutside from "@/app/helpers/clickOutside";
import { User } from "@prisma/client";
import axios from "axios";

const options = ["Ceci", "Sol", "Jaz", "Paz"];

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isToggled, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };

    fetchUsers();
  }, []);

  useClickOutside(ref, () => {
    setToggle(false);
  });

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setToggle(false);
  };

  return (
    <div
      className="w-full mx-auto mb-2 cursor-pointer bg-gray-100"
      onClick={() => setToggle(!isToggled)}
    >
      <button
        className={`flex items-center w-full justify-between text-gray-500 border-[1px] focus:border-2 focus:border-blue-500 border-gray-300 py-2 px-4 h-12 min-w-max rounded`}
      >
        {selectedOption || "Assign User"}
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
            {users.map((user) => (
              <li
                key={user.id}
                onClick={onOptionClicked(user.name)}
                className="mt-2 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-300"
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AssigneeSelect;
