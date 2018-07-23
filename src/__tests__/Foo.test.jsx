import React from "react";
import { mount } from "enzyme";
import Foo from "../Foo";

describe("<Foo />", () => {
    it("does not show the styles for the imported components", () => {
        const component = mount(<Foo />);
        expect(component).toMatchSnapshot();
    })
})
