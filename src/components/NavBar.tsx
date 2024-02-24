import logo from "@/assets/images/logo.png";

export function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center sticky top-0 p-4 bg-darkPrimary">
      <div className="flex justify-between items-center w-3/4">
        <img src={logo} alt="logo_opencommunity" className="w-7" />
        <div className="flex justify-end items-center gap-8">
          <h1 className="text-primary hover:text-primary/80 text-sm transition cursor-pointer">
            Sign in
          </h1>
          <button className="border-none bg-primary hover:bg-primary/80 text-white text-sm p-1 w-20 rounded transition">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
