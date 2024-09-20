import { Link, useLocation } from "react-router-dom";
import { NAVLINKS } from "../../data";

export const Sidebar = () => {
    const location = useLocation();
    const pathName = location.pathname;
  return (
    <div className="flex flex-col w-72 px-4 py-4 h-full sticky">
      <h1 className=" font-bold text-xl  pt-2">Project-To-D0</h1>

      <div>
        <ul className=" pt-8 ">
          {NAVLINKS.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={` flex gap-1 hover:bg-edit-color/15 rounded-md  ${pathName === link.href ? 'bg-edit-color/15' : ''} `}
            >
              <li className='flex items-center gap-4 p-3 ' >
                <span>{link.icon}</span>
                <span> {link.label} </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
