import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import LoginForm from "../../widgets/login-form";

vi.mock("@/features/auth/api/use-login", () => ({
  useAuthentication: () => ({
    mutate: vi.fn(),
    isPending: false,
    isError: false,
  }),
}));

describe("LoginForm validation", () => {
  it("should show validation errors when submitting empty form", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.click(screen.getByRole("button", { name: /entrar/i }));

    expect(
      await screen.findByText(/O campo e-mail é obrigatório/i),
    ).toBeTruthy();
    expect(
      await screen.findByText(/O campo senha é obrigatório/i),
    ).toBeTruthy();
  });

  it("should not submit when form is invalid", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(screen.getByLabelText(/e-mail/i), "gabriel");
    await user.type(screen.getByLabelText(/senha/i), "123");

    await user.click(screen.getByRole("button", { name: /entrar/i }));

    expect(
      await screen.findByText(/O e-mail digitado deve ser um e-mail válido/i),
    ).toBeTruthy();

    const { mutateMock } = vi.hoisted(() => ({
      mutateMock: vi.fn(),
    }));

    vi.mock("@/features/auth/api/use-login", () => ({
      useAuthentication: () => ({
        mutate: mutateMock,
        isPending: false,
      }),
    }));

    await user.click(screen.getByRole("button", { name: /entrar/i }));

    expect(mutateMock).not.toHaveBeenCalled();
  });
});
