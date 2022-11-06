import { screen } from "@testing-library/react";
import { mockRobotsList } from "../../mocks/mockRobots";
import mockRobotsState from "../../mocks/mockRobotsState";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it's rendered with a list of robots in the store", () => {
    test("Then it should show a heading level 2 with the text 'Robots list'", () => {
      const expectedHeadingText = "Robots list";
      const expectedLevel = 2;

      renderWithProviders(<RobotsList />);

      const renderedHeadingLevel = screen.queryByRole("heading", {
        level: expectedLevel,
        name: expectedHeadingText,
      });

      expect(renderedHeadingLevel).toBeInTheDocument();
    });

    test("Then it should show a list with 2 robot cards", () => {
      const robotsList = mockRobotsList;
      const [r1, r2] = robotsList;

      renderWithProviders(<RobotsList />, {
        preloadedState: { robots: mockRobotsState },
      });

      const renderedRobot1 = screen.queryByRole("heading", {
        level: 3,
        name: r1.name,
      });
      const renderedRobot2 = screen.queryByRole("heading", {
        level: 3,
        name: r2.name,
      });

      expect(renderedRobot1).toBeInTheDocument();
      expect(renderedRobot2).toBeInTheDocument();
    });
  });
});
