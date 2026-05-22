import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import LoginForm from "../../widgets/login-form";
import { render, screen } from "@testing-library/react";

describe("LoginForm", () => {
  it("should show validation errors when submitting empty form", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.click(
      screen.getByRole("button", {
        name: /entrar/i,
      }),
    );

    expect(
      await screen.findByText(/O campo e-mail é obrigatório/i),
    ).toBeTruthy()
    expect(
      await screen.findByText(/O campo e-mail é obrigatório/i),
    ).toBeTruthy()
  });
});
