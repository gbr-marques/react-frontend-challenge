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
import redirectBackdrop from "../../../shared/assets/images/redirect_backdrop.jpg";


export function RedirectPage() {
  return (
    <section
      className="flex min-h-screen items-center justify-center p-4 bg-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(15, 25, 31, 0.6), rgba(12, 25, 31, 8)),
          url(${redirectBackdrop})
        `,
      }}
    >
      <div className="bg-[#36434e] flex rounded-md shadow-lg overflow-hidden max-w-100">
        <div className="h-fit flex flex-col items-center justify-center text-center gap-4 p-6 md:p-4 text-white leading-tight ">
          <img src={logo} alt="Logo do CineDash" className="w-[60%] max-w-64" />
          <h1 className="text-2xl font-bold georgia">
            Você precisa estar logado para acessar o CineDash
          </h1>
          <p>Faça login para continuar explorando seus filmes e listas</p>
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  );
}
