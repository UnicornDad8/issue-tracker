"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { BsFillBugFill } from "react-icons/bs";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="border-b mb-5 px-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/">
            <BsFillBugFill color="#3B82F6" size={"1.8rem"} />
          </Link>
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
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover:text-zinc-800 transition-colors": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          {status === "authenticated" && (
            <div className="relative inline-block text-left">
              <div onClick={() => setShowMenu(!showMenu)}>
                {" "}
                <div className="w-10 h-10 cursor-pointer rounded-full overflow-hidden border-4 border-blue-500 shadow-black shadow-2xl">
                  {session?.user ? (
                    <img
                      className="w-full h-full object-contain"
                      src={session.user!.image!}
                      alt="avatar"
                    />
                  ) : (
                    <div className="flex w-full h-full bg-gray-400 text-white items-center justify-center font-bold">
                      {session.user!.name[0]!}
                    </div>
                  )}
                </div>
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
                        {session!.user!.email}
                      </p>
                    </div>
                    <Link
                      href="/api/auth/signout"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                      className="bg-blue-500 hover:bg-blue-300 flex grow text-white py-2 px-4 rounded"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          {status === "unauthenticated" && (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
