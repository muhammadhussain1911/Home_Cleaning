// components/Breadcrumbs.js
import Link from "next/link";
import { Fragment } from "react";

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-100 py-3 px-4">
      <div className="container mx-auto">
        <ol className="flex flex-wrap gap-2 text-sm md:text-base">
          {items.map((item, index) => (
            <Fragment key={index}>
              {index > 0 && <li className="text-gray-500">/</li>}
              <li>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-secondary hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-semibold">
                    {item.label}
                  </span>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
}
