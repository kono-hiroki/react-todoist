import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { CheckBox } from "../components/Checkbox";
import { JestEnvironment } from "@jest/environment";

beforeEach(cleanup);

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn()
        }))
      }))
    }))
  }
}));

describe("<Checbox />", () => {
  describe("Success", () => {
    it("renders the task checkbox", () => {
      const { queryByTestId } = render(
        <CheckBox id="1" taskDesc="Finish this tutorial series!" />
      );
      debug();
    });
  });
});
