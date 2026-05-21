import { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/shared/assets/cinedash_logo.png";
import { Checkbox } from "../../../components/ui/checkbox";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const authenticateUser = () => {
    navigate({ to: "/home" });
  };

  const schema = z.object({
    email: z.string().email("O e-mail digitado deve ser um e-mail válido"),
    password: z.string().min(6, "A senha deve conter, no mínimo, 6 caracteres"),
  });

  const {
    register: login,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onFormSubmit = (data) => console.log(data);

  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="bg-[#1D242A] flex rounded-md shadow-lg min-h-150 overflow-hidden">
        <div className="w-1/2 bg-red-400 hidden md:block"></div>
        <div className="flex flex-col items-center justify-center text-center gap-4 p-4 md:p-8 text-white leading-tight md:w-1/2">
          <img src={logo} alt="Logo do CineDash" className="w-[60%] max-w-64" />
          <h1 className="text-3xl font-bold">
            A sua plataforma de curadoria e descoberta de filmes
          </h1>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet consectetur. Egestas sit felis aenean
            tincidunt sem. Hendrerit consequat id diam quam dignissim
            pellentesque quam ultrices sed.
          </p>
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

              <p className="text-red-500 text-sm text-start">{errors.email?.message}</p>
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
              <p className="text-red-500 text-sm text-start">{errors.password?.message}</p>
            </div>

            <span className="w-full flex gap-2 text-sm items-center text-gray-400">
              <Checkbox></Checkbox> Mantenha-me conectado{" "}
            </span>
            <Button
              className="bg-[#F98635] w-full h-12"
              type="submit"
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
