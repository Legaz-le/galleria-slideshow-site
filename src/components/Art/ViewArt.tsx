import Navbar from "../Navbar/Navbar";
import Progression_bar from "./Progression_bar";

const ViewArt = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center max-w-[1250px] mx-auto mt-6 px-4">
        <div className="relative  max-w-[50%]">
          <img
            src="/assets/starry-night/hero-large.jpg"
            alt="art"
            className="max-w-[500px]"
          />
          <div className="flex flex-col absolute top-0 -right-50 bg-white pb-25 pl-12 pt-1">
            <h1 className="text-6xl font-bold font-serif w-2xs">
              Starry Night
            </h1>
            <p>Vincent Van Gogh</p>
          </div>
          <img
            src="/assets/starry-night/artist.jpg"
            alt="artist"
            className="object-contain absolute -right-40 -bottom-10"
          />
          <div className="absolute gap-3 flex bottom-5 left-8 bg-black text-white/50 p-2 cursor-pointer hover:bg-white/20">
          <img src="/assets/shared/icon-view-image.svg" alt="icon-view" className="object-contain"/>
            <p className="uppercase font-serif">View image </p>
          </div>
        </div>
        <div className="flex-  relative max-w-[50%] ml-50 font-serif text-gray-500 font-[500] ">
          <div className="absolute -top-10 -left-4 md:-left-8 lg:-top-45 lg:-left-10 opacity-10 z-0">
            <span className="text-[200px] md:text-[250px] lg:text-[200px] font-bold">
              1889
            </span>
          </div>
          <p className="w-[350px]">
            Although The Starry Night was painted during the day in Van Gogh's
            ground-floor studio, it would be inaccurate to state that the
            picture was painted from memory. The view has been identified as the
            one from his bedroom window, facing east, a view which Van Gogh
            painted variations of no fewer than twenty-one times, including The
            Starry Night. "Through the iron-barred window," he wrote to his
            brother, Theo, around 23 May 1889, "I can see an enclosed square of
            wheat ... above which, in the morning, I watch the sun rise in all
            its glory."
          </p>

          <p className="mt-20 underline text-[12px] hover:text-black/90 font-serif uppercase cursor-pointer">
            Go to source
          </p>
        </div>
      </div>
      <Progression_bar />
    </>
  );
};

export default ViewArt;
