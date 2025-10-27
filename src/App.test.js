import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio shell", () => {
  render(<App />);
  // Check for a stable piece of UI text
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
});
