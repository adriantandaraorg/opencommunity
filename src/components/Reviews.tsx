import { reviews } from "@/utils";

export function Reviews() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {/* Reviews Title  */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white text-center text-3xl font-bold">
          Don't take our world for it
        </h1>
        <p className="text-zinc-400 text-center text-sm w-2/3">
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus — in ornare.
        </p>
      </div>

      {/* Reviews Cards */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {reviews.map(({ avatar, description, name, role }, index) => (
          <div className="flex flex-col justify-start items-start gap-3 bg-zinc-800/90 p-4 w-[245px]">
            <img src={avatar} alt={`avatar_${index}`} className="w-[15%]" />
            <p className="text-zinc-400 text-xs text-start font-normal w-full">
              {description}
            </p>
            <div className="bg-zinc-800 h-[1px] w-full"></div>
            <div className="flex justify-start items-center gap-1">
              <p className="text-white text-start text-xs font-normal">
                {name}
              </p>
              <p className="text-zinc-600 text-center text-xs font-bold">/</p>
              <p className="text-primaryLight text-start text-xs font-normal">
                {role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
