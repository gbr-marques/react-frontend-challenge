import { SquareArrowOutUpRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <>
      <footer className="w-full p-4 md:h-[15dvh] min-h-fit md:p-4 bg-[#14181c] text-white flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-full max-w-[1350px] p-4  md:p-4 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <ul className="text-center md:text-start uppercase flex flex-col gap-2">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/discover">Descobertas</Link>
            </li>
            <li>
              <Link to="/watchlist">Estante</Link>
            </li>
          </ul>

          <Separator className="max-w-64 md:hidden" />
          <div className="flex flex-col md:flex-row gap-4 items-center md:w-1/2 md:max-w-[600px]">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGkNyGKX-XWFw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690214133018?e=1781136000&v=beta&t=ap8-DzzlweIVGfl_1eWZDvhqpN30oh5mwyYTQj-Gnd4"
              alt="Foto do desenvolvedor"
              className="h-32 w-32 rounded-full shadow-lg object-cover" 
            />
            <div className="text-center md:text-start flex flex-col gap-2">
              <h3 className="text-2xl georgia font-bold">
                Sobre o desenvolvedor
              </h3>
              <p className="leading-tight font-light text-sm">
                24 anos, atua no front-end criando interfaces web com foco em
                experiência e usabilidade. Fã de <i>Jurassic Park</i> e,
                diferente de John Hammond, precisa poupar despesas com uma
                frequência maior do que gostaria.
              </p>
              <ul className="flex justify-center md:justify-start gap-4">
                <Link
                  to="https://www.linkedin.com/in/gbr-marques-dev/"
                  target="_blank"
                  className="flex gap-2 items-center p-0 text-gray-400 text-sm"
                >
                  LinkedIn{" "}
                  <SquareArrowOutUpRightIcon
                    size={14}
                  ></SquareArrowOutUpRightIcon>
                </Link>
                <Link
                  to="https://github.com/gbr-marques"
                  target="_blank"
                  className="flex gap-2 items-center p-0 text-gray-400 text-sm"
                >
                  Github{" "}
                  <SquareArrowOutUpRightIcon
                    size={14}
                  ></SquareArrowOutUpRightIcon>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
