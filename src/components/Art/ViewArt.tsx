import Navbar from "../Navbar/Navbar";
import Progression_bar from "./Progression_bar";
import data from "../../../starter-code/data.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ViewArt = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");

  const initialIndex = data.findIndex((item) => item.name === decodedName);
  const [currentIndex, setCurrentIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const art = data[currentIndex];

  return (
    <>
      <Navbar />
      <div className="flex animate-fadeIn justify-between items-center max-w-[1250px] mx-auto mt-6 px-4">
        <div className="relative max-w-[50%]">
          <img
            src={art.images.hero.large.replace("./", "/")}
            alt={art.name}
            className="max-w-[500px]"
          />
          <div className="flex flex-col absolute top-0 -right-85 bg-white  h-62 pl-14 pt-1">
            <h1 className="text-6xl font-bold font-serif w-[350px]">{art.name}</h1>
            <p className="text-gray-500">{art.artist.name}</p>
          </div>
          <img
            src={art.artist.image.replace("./", "/")}
            alt={art.artist.name}
            className="object-contain absolute -right-40 -bottom-10"
          />
          <div className="absolute gap-3 flex bottom-5 left-8 bg-black text-white/50 p-2 cursor-pointer hover:bg-white/20">
            <img
              src="/assets/shared/icon-view-image.svg"
              alt="icon-view"
              className="object-contain"
            />
            <p className="uppercase font-serif">View image </p>
          </div>
        </div>

        <div className="relative max-w-[50%] ml-50 font-serif text-gray-500 font-[500] mt-35">
          <div className="absolute -top-10 -left-4 md:-left-8 lg:-top-45 lg:-left-10 opacity-10 z-0">
            <span className="text-[200px] md:text-[250px] lg:text-[200px] font-bold">
              {art.year}
            </span>
          </div>

          <div className="flex flex-col gap-5 w-[350px]">
            <p>{art.description}</p>
            <a
              href={art.source}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[12px] mt-15 hover:text-black/90 font-serif uppercase cursor-pointer"
            >
              Go to source
            </a>
          </div>
        </div>
      </div>
      <Progression_bar
        art={art}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentIndex}
        total={data.length}
      />
    </>
  );
};

export default ViewArt;
