"use client";

import React, { useState, useRef, useEffect } from "react";
import { Issue, User } from "@prisma/client";
import { IoIosArrowDown } from "react-icons/io";
import useClickOutside from "@/app/helpers/clickOutside";
import { User } from "@prisma/client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/app/components";

const key = "assigned-user";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const [isToggled, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  useClickOutside(ref, () => setToggle(false));
  useEffect(() => {
    // While loading, load the state from the localStorage.
    if (window.localStorage.getItem("Value"))
      setSelectedOption(window.localStorage.getItem("Value"));
  }, []);

  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  if (error) return null;

  if (isLoading) return <Skeleton className="mb-2" height="3rem" />;

  const onOptionClicked = (value, userId, i) => async () => {
    await axios.patch("/api/issues/" + issue.id, {
      assignedToUserId: userId || null,
    });

    setSelectedOption(value);
    window.localStorage.setItem("Value", value);
    setToggle(false);
  };

  const usersToMap = [...users, { id: null, name: "Unassigned" }];

  return (
    <div
      className="w-full mx-auto mb-2 cursor-pointer bg-gray-100"
      onClick={() => setToggle(!isToggled)}
    >
      <button
        type="button"
        className={`flex items-center w-full justify-between text-gray-500 border-[1px] focus:border-2 focus:border-blue-500 border-gray-300 py-2 px-4 h-12 min-w-max rounded`}
      >
        {selectedOption || "Unassigned"}
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
            {usersToMap?.map((user, i) => {
              return (
                <li
                  key={user?.id}
                  onClick={onOptionClicked(user?.name, user?.id, i)}
                  className="mt-2 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-300"
                >
                  {user?.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AssigneeSelect;
