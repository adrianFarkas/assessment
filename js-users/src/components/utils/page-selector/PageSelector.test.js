import React from "react";
import { shallow } from "enzyme";
import PageSelector from "./PageSelector";
import useQueryParams from "hooks/useQueryParams";

jest.mock("hooks/useQueryParams");

describe("Test PageSelector component", () => {
  let wrapper;
  test("Renders the first 3 button on first page", () => {
    useQueryParams.mockReturnValue({ page: 1 });
    wrapper = shallow(<PageSelector itemPerPage={10} totalItems={300} />);
    expect(wrapper.children()).toHaveLength(3);
    expect(wrapper.text()).toEqual("123");
  });
  test("Renders the last 3 button on last page", () => {
    useQueryParams.mockReturnValue({ page: 10 });
    wrapper = shallow(<PageSelector itemPerPage={5} totalItems={50} />);
    expect(wrapper.children()).toHaveLength(3);
    expect(wrapper.text()).toEqual("8910");
  });
  test("Renders 4 button on second page", () => {
    useQueryParams.mockReturnValue({ page: 2 });
    wrapper = shallow(<PageSelector itemPerPage={5} totalItems={50} />);
    expect(wrapper.children()).toHaveLength(4);
    expect(wrapper.text()).toEqual("1234");
  });
  test("Renders 4 button on penultimate page", () => {
    useQueryParams.mockReturnValue({ page: 49 });
    wrapper = shallow(<PageSelector itemPerPage={10} totalItems={500} />);
    expect(wrapper.children()).toHaveLength(4);
    expect(wrapper.text()).toEqual("47484950");
  });
  test("Renders 5 button on other page", () => {
    useQueryParams.mockReturnValue({ page: 33 });
    wrapper = shallow(<PageSelector itemPerPage={10} totalItems={500} />);
    expect(wrapper.children()).toHaveLength(5);
    expect(wrapper.text()).toEqual("3132333435");
  });
});
