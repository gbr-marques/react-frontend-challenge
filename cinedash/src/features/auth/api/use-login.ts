import { useMutation } from "@tanstack/react-query";
import type { ILogin } from "../model/types";

export function useAuthentication() {
  return useMutation({
    mutationFn: (data: ILogin) => logUser(data),
  });
}

async function logUser(data: ILogin) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const sessionToken = crypto.randomUUID();
  localStorage.setItem("token", sessionToken);
}
