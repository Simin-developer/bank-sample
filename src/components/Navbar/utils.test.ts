import { navLinks } from "../../constants";
import {
  setMenuItemActiveClassName,
  setMarginToNavLinks,
  setToggleMenu,
} from "./utils";

describe("setMenuItemActiveClassName() ", () => {
  it("should render'text-white' class when link is active", () => {
    const expectedClass = "text-white";
    const activeLink = setMenuItemActiveClassName("Home", "Home");
    expect(activeLink).toEqual(expectedClass);
  });
});
describe("setMarginToNavLinks()", () => {
  it("should render 'mr-0' class  when index equal navlinks lenghts mines 1", () => {
    const expecteMarginclass = "mr-0";

    const ShowLinkMargin = setMarginToNavLinks(3, navLinks);
    expect(ShowLinkMargin).toEqual(expecteMarginclass);
  });
});
describe("setToggleMenu ()", () => {
  it("should render 'flex' class  when toggle is true", () => {
    const expectedclass = "flex";

    const showMenu = setToggleMenu(true);
    expect(showMenu).toEqual(expectedclass);
  });
});
