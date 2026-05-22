import { useState } from "react";
import { Eye, EyeOff, LoaderCircleIcon, SplineIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthentication } from "../../features/auth/api/use-login";
import type { ILogin } from "../../features/auth/model/types";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const authenticateUser = () => {
    navigate({ to: "/home" });
  };

  const schema = z.object({
    email: z
      .string()
      .min(1, "O campo e-mail é obrigatório")
      .email("O e-mail digitado deve ser um e-mail válido"),
    password: z
      .string()
      .min(1, "O campo senha é obrigatório")
      .min(6, "A senha deve conter, no mínimo, 6 caracteres"),
  });

  const {
    register: login,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const { mutate, isPending } = useAuthentication();

  const onFormSubmit = (data: ILogin) => {
    mutate(data, {
      onSuccess: () => {
        navigate({ to: "/home" });
      },
    });
  };

  return (
    <>
      <form
        className="flex flex-col gap-2 w-full"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="password-toggle">E-mail</Label>

          <Input
            className="bg-background h-12 text-gray-600"
            id="password-toggle"
            placeholder="Digite seu e-mail"
            type="text"
            {...login("email")}
          />

          <p className="text-red-500 text-sm text-start">
            {errors.email?.message}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password-toggle">Senha</Label>
          <div className="relative">
            <Input
              className="bg-background h-12 text-gray-600"
              id="password-toggle"
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"}
              {...login("password")}
            />
            <Button
              className="absolute top-0 right-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              size="icon"
              type="button"
              variant="ghost"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
          <p className="text-red-500 text-sm text-start">
            {errors.password?.message}
          </p>
        </div>

        <span className="w-full flex gap-2 text-sm items-center text-gray-400">
          <Checkbox></Checkbox> Mantenha-me conectado{" "}
        </span>
        <Button
          className="bg-[#F98635] w-full h-12"
          type="submit"
          disabled={isPending}
        >
          {isPending ? (
            <span>
              <LoaderCircleIcon className="animate-spin"></LoaderCircleIcon>
            </span>
          ) : (
            <span>Entrar</span>
          )}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
