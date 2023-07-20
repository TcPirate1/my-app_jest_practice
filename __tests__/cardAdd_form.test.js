import { render, screen } from "@testing-library/react";
import Form from "../src/pages/form/form";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

describe("Form", () => {
  it("renders a form", () => {
    render(<Form />);

    const heading = screen.getByRole("heading", {
      name: /test form/i,
    });

    expect(heading).toBeInTheDocument();

    const name = screen.getByRole("textbox", {
      name: /name/i,
    });

    const image = screen.getByRole("textbox", {
      name: /image/i,
    });

    user.type(name, "Test Name");
    user.type(image, "Test Image");

    user.click(screen.getByRole("button", { name: /submit/i }));

    //Uncomment below tests to test error messages

    expect(name).toHaveAccessibleErrorMessage(/This field is required/i);
    expect(image).toHaveAccessibleErrorMessage(/This field is required/i);
  });
});

// Add error message tests
// Material UI automatically sets aria-invalid="true" but not aria-errormessage
// });
