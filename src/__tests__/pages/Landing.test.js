import { render } from "@testing-library/react";
import { Landing } from "../../pages/Landing/Landing";

describe("Landing page Snapshots", () => {
  it("Desktop", () => {
    const { container } = render(<Landing />);
    expect(container).toMatchSnapshot();
  });
});
