import Link from "next/link";

const BreadCrumbs = ({crumbs}) => {
  return (
    <nav>
      <ul className="flex flex-wrap text-gray-200 gap-3">
        <li>
          <Link href="/" className="hover:text-white">Home</Link>
        </li>
        {crumbs.map((crumb, index) => (
        <li key={index}>
          {crumb.link ? (
            <Link href={crumb.link} className="hover:text-white">{crumb.name}</Link>
          ) : (
            <span className="text-white font-bold">
              {crumb.name}
            </span>
          )}
        </li>
        ))}
      </ul>
    </nav>
  )
};

export default BreadCrumbs;