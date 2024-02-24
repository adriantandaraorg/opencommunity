import logo from "@/assets/images/logo.png";
import { footerLinks, socials } from "@/utils";

export function Footer() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {/* Footer Subscribe */}
      <div className="lg:flex justify-between items-center gap-4 bg-primaryLight/80 lg:w-[815px] w-[50%] p-10 rounded-[8px]">
        {/* Footer Subscribe Title */}
        <div className="flex flex-col justify-start lg:mb-0 mb-4 items-start gap-1">
          <h1 className="text-white text-start text-2xl font-bold">
            Stay in the loop
          </h1>
          <p className="text-zinc-300 text-start text-xs">
            Join our newsletter to get top news before anyone else.
          </p>
        </div>

        {/* Footer Subscribe Search */}
        <div className="sm:flex justify-end items-center gap-1.5">
          <input
            type="text"
            placeholder="Your best email..."
            className="border border-primaryLight sm:mb-0 mb-2 bg-primary/40 focus:bg-primary  px-2 py-2 text-zinc-400 placeholder:text-zinc-400 text-start text-xs w-full transition"
          />
          <button className="border-none bg-white hover:bg-white/80 text-center text-black text-xs w-[100px] p-2 rounded-sm transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col justify-center items-center gap-4 mt-10">
        <div className="sm:flex justify-between items-center sm:w-[75%] w-[300px]">
          {/* Footer Links Info */}
          <div className="flex flex-col justify-start sm:mb-0 mb-4 items-start gap-2">
            <img
              src={logo}
              alt="logo_opencommunity"
              className="w-[7%] sm:flex hidden"
            />
            <p className="text-zinc-400 sm:text-start text-center text-xs sm:w-1/2">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>

          {/* Footer Links More */}
          <div className="flex justify-end items-start gap-10">
            {footerLinks.map(({ title, links }) => (
              <div className="flex flex-col justify-start items-start gap-0.5">
                <h1 className="text-zinc-200 text-start text-sm font-medium">
                  {title}
                </h1>
                {links.map((link) => (
                  <p className="text-zinc-400 text-start text-xs">{link}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer Copyright */}
      <div className="sm:flex justify-between items-center sm:w-1/2 mt-10">
        <h1 className="text-zinc-400 text-start text-xs sm:mb-0 mb-4">
          Made by <span className="text-zinc-300 font-medium">Adrian_</span>.
          All right reserved
        </h1>

        {/* Footer Copyright Social */}
        <div className="flex sm:justify-end justify-center items-center sm:gap-4 gap-2">
          {socials.map((social, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[30px] h-[30px] bg-primary/50 rounded-full"
            >
              {social}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
