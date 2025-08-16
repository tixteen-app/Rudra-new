"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Investment Casting Processes", path: "/investment/investmentcasting" },
    { name: "Materials", path: "/investment/materials" },
    { name: "Dimensions, Weights & Tolerances", path: "/investment/dimensions" },
    { name: "Prototyping", path: "/investment/prototyping" },
    { name: "Tooling", path: "/investment/tooling" },
    { name: "Assembly & Testing", path: "/investment/assembly" },
    { name: "Warehousing & Distribution", path: "/investment/warehousing" },
    { name: "Case Studies", path: "/investment/case-studies" },
  ];

  return (
    <aside
      className="w-100 px-5 ml-3 h-screen sticky top-0 bg-gray-80 p-8 border-r border-gray-200"
      style={{
        height: "70vh",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "0px",
      }}
    >
      <ul
        className="space-y-5 text-gray-700"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {links.map((link) => (
          <li key={link.path} className="text-2xl font-medium">
            <Link
              href={link.path}
              className={`${pathname === link.path ? "text-blue-600" : ""}`}
              style={{ textDecoration: "underline" }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;