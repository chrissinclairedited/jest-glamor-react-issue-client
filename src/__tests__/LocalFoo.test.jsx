import React from "react";
import { mount } from "enzyme";
import LocalFoo from "../LocalFoo";

describe("<LocalFoo />", () => {
    it("works well for local components", () => {
        const component = mount(<LocalFoo />);
        expect(component).toMatchSnapshot();
    })
})
