import { Separator } from "../../components/ui/separator";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <>
      <footer className="w-full p-4 md:p-8 bg-[#14181c] text-white flex flex-col md:flex-row items-center justify-between gap-4">
        <ul className="text-center md:text-start uppercase flex flex-col gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Descobertas</Link>
          </li>
          <li>
            <Link to="/">Estante</Link>
          </li>
          <li>
            <Link to="/">API</Link>
          </li>
        </ul>

        <Separator className="max-w-64 md:hidden" />
        <div className="flex flex-col md:flex-row gap-4 items-center md:w-1/2 md:max-w-[600px]">
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-full flex items-center justify-center text-center">
            Placeholder de imagem
          </div>
          <div className="text-center md:text-start flex flex-col gap-2">
            <h3>Sobre o desenvolvedor</h3>
            <p className="leading-tight font-light text-sm">
              Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis
              habitasse malesuada faucibus vulputate. Mattis diam pharetra sit
              porttitor aenean senectus morbi vestibulum. Nulla ut nibh egestas
              tincidunt a justo. Lobortis neque eu dui odio in.
            </p>
            <ul className="flex justify-center md:justify-start gap-8">
              <li>Linkedin</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
