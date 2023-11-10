"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillBugFill } from "react-icons/bs";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsFillBugFill color="#89AAF4" size={"1.8rem"} />
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
    </nav>
  );
};

export default Navbar;
