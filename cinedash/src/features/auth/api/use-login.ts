import { useMutation } from "@tanstack/react-query";
import type { ILogin } from "../model/types";

export function useAuthentication(formData: ILogin) {
  return useMutation({
    mutationFn: () => logUser(formData),
  });
}

async function logUser(formData: ILogin) {
  const sessionToken = crypto.randomUUID();
  localStorage.setItem("token", sessionToken);
}
