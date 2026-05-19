import logo from "@/shared/assets/cinedash_logo.png";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../components/ui/menubar";
import { LogOutIcon, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";

const Header = () => {
  return (
    <>
      <header className="w-full bg-[#2C3440] h-[10dvh] p-4 md:p-8 flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <img src={logo}></img>
          <ul className="gap-12 hidden md:flex font-black uppercase text-lg">
            <li>
              <Link className="text-white" to="/descobertas">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/discover">
                Descobertas
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/estante">
                Minha estante
              </Link>
            </li>
          </ul>
        </div>
        <Button
          aria-label="Logout"
          variant={"destructive"}
          className="text-white bg-[#FE4444] hidden md:flex"
        >
          Sair<LogOutIcon></LogOutIcon>
        </Button>

        <Menubar className="border-none md:hidden">
          <MenubarMenu>
            <MenubarTrigger>
              <Menu color="grey" className="h-8 "></Menu>
            </MenubarTrigger>
            <MenubarContent className="mr-4 bg-[#3c4655] text-white">
              <MenubarGroup>
                <MenubarItem>
                  <Link className="uppercase font-black text-xl p-2 w-full" to="/home">
                    Home
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link
                    className="uppercase font-black text-xl p-2 w-full"
                    to="/discover"
                  >
                    Descobertas
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link
                    className="uppercase font-black text-xl p-2 w-full"
                    to="/watchlist"
                  >
                    Minha estante
                  </Link>
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem>
                  <Link to="/" className="flex gap-2 items-center p-2">
                    Logout <LogOutIcon></LogOutIcon>
                  </Link>
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>
    </>
  );
};

export default Header;
