"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { BsFillBugFill } from "react-icons/bs";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

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
            <Link href="/api/auth/signout">Logout</Link>
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
