"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { BsFillBugFill } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { Avatar } from "./components";
import classnames from "classnames";
import { Skeleton } from "@/app/components";

const Navbar = () => {
  return (
    <nav className="border-b mb-5 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/">
            <BsFillBugFill color="#3B82F6" size={"1.8rem"} />
          </Link>
          <NavLinks />
        </div>
        <AuthStatus />
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <ul className="flex">
      {links.map((link) => (
        <li
          key={link.href}
          className={classnames({
            "bg-zinc-100": link.href === currentPath,
            "flex h-14 items-center px-6": true,
          })}
        >
          <Link
            className={classnames({
              "nav-link": true,
              "text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  if (status === "loading")
    return <Skeleton circle={true} width="3rem" height="3rem" />;

  if (status === "unauthenticated")
    return (
      <Link
        className="btn btn-blue flex items-center shadow-2xl shadow-blue-300"
        href="/api/auth/signin"
      >
        <MdOutlineLogin className="mr-2" />
        Login
      </Link>
    );

  return (
    <div className="flex items-center">
      <div className="relative inline-block text-left">
        <div onClick={() => setShowMenu(!showMenu)}>
          <Avatar user={session?.user} />
        </div>
        {showMenu && (
          <div
            className="absolute right-0 z-10 mt-2 w-86 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="p-6">
              <div role="none">
                <p
                  className="text-gray-400 text-lg leading-relaxed antialiased tracking-wide block mb-2"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  {session?.user?.email}
                </p>
              </div>
              <Link
                href="/api/auth/signout"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                className="bg-blue-500 hover:bg-blue-300 flex grow text-white py-2 px-4 shadow-2xl shadow-blue-300 font-semibold rounded"
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
