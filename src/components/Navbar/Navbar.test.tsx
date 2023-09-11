import { render, RenderResult, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  let testComponent: RenderResult;

  beforeEach(() => {
    testComponent = render(<Navbar />);
  });

  it("should render component", () => {
    expect(testComponent.container.querySelector(".navbar")).toBeTruthy;
    expect(testComponent.getAllByTestId("menu-large-item")).toHaveLength(4);
    expect(testComponent.getAllByTestId("menu-small-item")).toHaveLength(4);
  });

  it("should active linkand change it's color when click on link ", () => {
    const testMenuItemHome = testComponent.getAllByTestId("menu-large-item")[0];
    fireEvent.click(testMenuItemHome);

    expect(testMenuItemHome.classList[4]).toEqual("text-white");
  });

  it("should active linkand change it's color when click on link ", () => {
    const testMenuItemHome = testComponent.getAllByTestId("menu-small-item")[0];
    fireEvent.click(testMenuItemHome);

    expect(testMenuItemHome.classList[4]).toEqual("text-white");
  });

  it("should show menu image when toggle is flase ", () => {
    const testMenuItemImage =
      testComponent.container.querySelector(".object-contain");
    expect(testMenuItemImage).toHaveAttribute("src", "menu.svg");
  });
  it("should show close image when toggle is true ", () => {
    const testMenuItemImage =
      testComponent.container.querySelector(".object-contain");

    fireEvent.click(testMenuItemImage as Element);
    expect(testMenuItemImage).toHaveAttribute("src", "close.svg");
  });
});
