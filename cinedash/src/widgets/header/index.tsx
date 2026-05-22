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
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { useAuthStore } from "../../stores/auth/use-auth-store";

const Header = () => {
  const navigate = useNavigate();

  const { logout } = useAuthStore()

  const logoutUser = () => {
    navigate({ to: "/" });
    logout()
  };

  return (
    <>
      <header className="w-full bg-[#2C3440] h-[10dvh] min-h-fit p-2 md:p-4 flex justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-337.5">
          <div className="flex gap-12 items-center">
            <img src={logo}></img>
            <ul className="gap-12 hidden md:flex font-black uppercase text-lg">
              <li>
                <Link className="text-white" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/discover">
                  Descobertas
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/watchlist">
                  Minha estante
                </Link>
              </li>
            </ul>
          </div>
          <Button
            aria-label="Logout"
            variant={"destructive"}
            onClick={() => logoutUser()}
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
                    <Link
                      className="uppercase font-black text-xl p-2 w-full"
                      to="/home"
                    >
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
                    <Button variant={"link"}
                      onClick={() => logoutUser()}
                      className="flex gap-2 items-center p-2"
                    >
                      Logout <LogOutIcon></LogOutIcon>
                    </Button>
                  </MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>
    </>
  );
};

export default Header;
