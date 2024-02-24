import { FaCheck } from "react-icons/fa";
import { ilustrations } from "@/utils";
import { motion } from "framer-motion";

export function Body() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      {/* Body Title */}
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center items-center bg-greenlight rounded-full px-4 py-1.5">
          <p className="text-greendark text-center text-xs font-medium">
            Reach goals that matter
          </p>
        </div>
        <h1 className="text-white text-center text-2xl font-bold">
          One product, unlimited solutions
        </h1>
        <p className="text-zinc-400 text-sm text-center w-2/3">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum --- semper quis lectus nulla.
        </p>
      </div>

      {/* Body Ilustrations */}
      <div className="flex flex-col justify-center items-center mt-10 gap-10 lg:w-1/2 sm:w-2/3">
        {ilustrations.map(({ info, image }, index) => (
          <div
            key={index}
            className={`flex justify-center items-center lg:gap-10 gap-5 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : null
            }`}
          >
            <motion.img
              src={image}
              whileHover={{ scale: 1.02 }}
              alt={`ilustration_${index + 1}`}
              className="lg:w-[50%] w-[30%] rounded-[8px] cursor-crosshair"
            />
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-primaryLight text-xs font-thin">
                {info.beforeTitle}
              </h2>
              <h3 className="text-white text-xl font-bold">{info.title}</h3>
              <p className="text-zinc-400 text-sm">{info.description}</p>

              {/* Body Ilustrations Tasks */}
              <div className="flex flex-col justify-start items-start gap-1.5 mt-4">
                {info.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-1.5"
                  >
                    <FaCheck className="text-green-900 text-xs" />
                    <p className="text-zinc-400 text-sm font-medium">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="w-1/2 bg-zinc-800 h-[1px] rounded-full mt-14"></div>
    </div>
  );
}
