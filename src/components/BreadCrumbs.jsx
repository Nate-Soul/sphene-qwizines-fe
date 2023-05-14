import React from "react";
import Link from "next/link";

const BreadCrumbs = ({title}) => {
  return (
    <ul className="flex text-gray-200 gap-3">
        <li>
            <Link href="/">
                Home
            </Link>
        </li>
        <li>
          <span className="font-bold truncate">
            {title}
          </span>
        </li>
    </ul>
  )
}

export default BreadCrumbs
