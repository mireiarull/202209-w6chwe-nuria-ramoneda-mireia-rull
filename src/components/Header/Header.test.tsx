import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Robots' and the logo", async () => {
      const headingText = "Robots";

      render(<Header />);

      const renderedHeading = screen.queryByRole("heading", {
        name: headingText,
      });
      const renderedLogo = screen.queryByAltText("Robot icon");

      expect(renderedHeading).toBeInTheDocument();
      expect(renderedLogo).toBeInTheDocument();
    });
  });
});
