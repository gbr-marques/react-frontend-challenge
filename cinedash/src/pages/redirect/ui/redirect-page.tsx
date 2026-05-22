import { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Eye, EyeOff, LoaderCircleIcon, SplineIcon } from "lucide-react";
import logo from "@/shared/assets/cinedash_logo.png";
import { Checkbox } from "../../../components/ui/checkbox";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ILogin } from "../../../features/auth/model/types";
import { useAuthentication } from "../../../features/auth/api/use-login";
import LoginForm from "../../../widgets/login-form";

export function RedirectPage() {
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="bg-[#1D242A] w-full max-w-[1000px] flex rounded-md shadow-lg overflow-hidden">
        <div className="h-fit flex flex-col items-center justify-center text-center gap-4 p-2 md:p-4 text-white leading-tight md:w-1/2">
          <img src={logo} alt="Logo do CineDash" className="w-[60%] max-w-64" />
          <h1 className="text-2xl font-bold georgia">
            Você precisa estar logado para acessar esta área
          </h1>
          <p>Faça login para continuar explorando seus filmes e listas</p>
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  );
}
