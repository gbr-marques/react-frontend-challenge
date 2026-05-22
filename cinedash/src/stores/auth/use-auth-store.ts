import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;

  login: () => void;
  logout: () => void;
};
