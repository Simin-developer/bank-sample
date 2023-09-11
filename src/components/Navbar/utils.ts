import { NavLinks } from "../../constants/types";

export const setMenuItemActiveClassName = (active: string, navTitle: string) =>
  active === navTitle ? "text-white" : "text-dimWhite";

export const setMarginToNavLinks = (index: number, navLinks: NavLinks[]) =>
  index === navLinks.length - 1 ? "mr-0" : "mr-10";

export const setMarginToNavLinksSmallItem = (
  index: number,
  navLinks: NavLinks[]
) => (index === navLinks.length - 1 ? "mb-0" : "mb-4");

export const setToggleMenu = (toggle: Boolean) => (toggle ? "flex" : "hidden");
