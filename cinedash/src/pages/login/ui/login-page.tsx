import logo from "@/shared/assets/cinedash_logo.svg";
import LoginForm from "../../../widgets/login-form";
import loginBackdrop from "../../../shared/assets/images/login_backgrop.jpg";
import loginBanner from "../../../shared/assets/images/login_banner.jpg";

export function LoginPage() {
  return (
    <section
      className="flex min-h-screen items-center justify-center p-4 bg bg-cover bg-center "
      style={{
        backgroundImage: `
          linear-gradient(rgba(15, 25, 31, 0.7), rgba(12, 25, 31, 8)),
          url(${loginBackdrop})
        `,
      }}
    >
      <div className="bg-[#36434e] w-full max-w-250 flex rounded-md shadow-lg overflow-hidden ">
        <div
          className="w-1/2 hidden md:block bg-cover bg-center"
          style={{
            backgroundImage: `url(${loginBanner})`,
          }}
        ></div>
        <div className="h-fit flex flex-col items-center justify-center text-center gap-4 p-2 md:p-6 text-white leading-tight md:w-1/2">
          <img src={logo} alt="Logo do CineDash" className="w-[60%] max-w-48" />
          <h1 className="text-2xl font-bold georgia">
            A sua plataforma de curadoria e descoberta de filmes
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas sit felis aenean
            tincidunt sem. Hendrerit consequat id diam quam dignissim
            pellentesque quam ultrices sed.
          </p>
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  );
}
