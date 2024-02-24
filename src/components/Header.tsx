import { features } from "@/utils";

import video from "@/assets/images/video.png";

export function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 mt-14">
        {/* Header Title */}
        <h1 className="text-white text-3xl text-center font-bold">
          Loading template for startups
        </h1>
        <p className="text-zinc-400 text-sm text-center w-4/12">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>

        {/* Header Buttons */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <button className="border-none bg-primary hover:bg-primary/80 text-white text-sm p-2 w-32 rounded-md transition">
            Start free trial
          </button>
          <button className="border-none bg-secondary hover:bg-secondary/80 text-white text-sm p-2 w-32 rounded-md transition">
            Learn more
          </button>
        </div>

        {/* Header Video */}
        <img
          src={video}
          alt="video_opencommunity"
          className="w-[65%] rounded-sm mt-10"
        />

        {/* Header Footer */}
        <div className="flex flex-col justify-center items-center gap-6 mt-20">
          <h1 className="text-white text-3xl text-center font-bold w-3/6">
            The majority of customers do not understand their workflows.
          </h1>
          <p className="text-zinc-400 text-sm text-center w-4/12">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          {/* Header Footer Features */}
          <div className="md:flex flex-wrap justify-center items-center gap-8 mt-6">
            {features.map(({ icon, title, description }) => (
              <div className="flex flex-col justify-center md:mb-0 mb-6 items-center gap-2.5 md:w-1/4">
                <div className="flex justify-center items-center bg-primary w-[40px] p-2 h-[40px] rounded-full">
                  {icon}
                </div>
                <h1 className="text-white text-base text-center font-semibold">
                  {title}
                </h1>
                <p className="text-zinc-400 text-xs text-center md:w-3/4 w-1/2">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-2/3 bg-zinc-800 h-[1px] rounded-full mt-14"></div>
    </div>
  );
}
