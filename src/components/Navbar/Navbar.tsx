import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import {
  setMenuItemActiveClassName,
  setMarginToNavLinks,
  setToggleMenu,
  setMarginToNavLinksSmallItem,
} from "./utils";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[7.75rem] h-[2rem]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[1rem] ${setMenuItemActiveClassName(
              active,
              nav.title
            )} ${setMarginToNavLinks(index, navLinks)}`}
            onClick={() => setActive(nav.title)}
            data-testid="menu-large-item"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[1.75rem] h-[1.75rem] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${setToggleMenu(
            toggle
          )} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[8.75rem] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${setMenuItemActiveClassName(
                  active,
                  nav.title
                )} ${setMarginToNavLinksSmallItem(index, navLinks)}`}
                onClick={() => setActive(nav.title)}
                data-testid="menu-small-item"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
