import { cleanup, screen } from "@testing-library/react";
import Home from "../../src/pages/Home/home";
import React from "react";
import { renderWithProviders } from "../../__config__/jest/utils/testUtils";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Home page shows the text", () => {
  renderWithProviders(<Home />);
  expect(screen.getByText<HTMLHeadingElement>("Home page")).toBeInTheDocument();
});
