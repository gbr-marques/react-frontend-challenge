import { useMutation } from "@tanstack/react-query";
import type { ILogin } from "../model/types";
import { useAuthStore } from "../../../stores/auth/use-auth-store";

export function useAuthentication() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: logUser,

    onSuccess: (data) => {
      login();
    },
  });
}

async function logUser(data: ILogin) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}