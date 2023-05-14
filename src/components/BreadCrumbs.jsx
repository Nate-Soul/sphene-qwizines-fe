import React from "react";
import Link from "next/link";

const BreadCrumbs = ({crumbs}) => {
  return (
    <nav>
      <ul className="flex text-gray-200 gap-3">
        <li>
          <Link href="/" className="hover:text-white">Home</Link>
        </li>
        {crumbs.map((crumb, index) => (
        <li key={index}>
          {crumb.link ? (
            <Link href={crumb.link} className="hover:text-white">{crumb.name}</Link>
          ) : (
            <span className="text-white font-bold truncate">
              {crumb.name}
            </span>
          )}
        </li>
        ))}
      </ul>
    </nav>
  )
}

export default BreadCrumbs

export const generateCrumbs = (path) => {
  const parts = path.split('/').filter(part => part !== '');
  const crumbs = [];

  parts.forEach((part, index) => {
    const initLink = `/${parts.slice(0, index + 1).join('/')}`;
    const name = part.charAt(0).toUpperCase() + part.slice(1).replace('-', '');
    const isLastSegment = index === parts.length - 1;
    const link = isLastSegment ? null : initLink;

    crumbs.push({name, link});

  });

  return crumbs;
}