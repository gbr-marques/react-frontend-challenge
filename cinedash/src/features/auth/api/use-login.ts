import { useMutation } from "@tanstack/react-query";

export function useAuthentication(formData) {
  return useMutation({
    mutationFn: () => logUser(formData),
  });
}

async function logUser(formData) {
  const sessionToken = crypto.randomUUID();
  localStorage.setItem("token", sessionToken);
}
