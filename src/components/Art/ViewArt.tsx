import Navbar from "../Navbar/Navbar";

const ViewArt = () => {
  return (
    <>
    <Navbar />
      <div className="flex justify-between items-center max-w-[1250px] mx-auto mt-6 px-4">
        <div className="relative  max-w-[50%]">
          <img src="/public/assets/starry-night/hero-large.jpg" alt="art" className="max-w-[500px]" />
          <div className="flex flex-col absolute top-0 -right-50 bg-white pb-25 pl-12 pt-1">
          <h1 className="text-6xl font-bold font-serif w-2xs">Starry Night</h1>
          <p>Vincent Van Gogh</p>
          </div>
          <img src="/public/assets/starry-night/artist.jpg" alt="artist" className="object-contain absolute -right-40 -bottom-10"/>
          <div className="">

          </div>
        </div>
        <div className="flex- max-w-[50%] ml-50 font-serif text-gray-500 font-[500] bg-[]">
          <p className="w-[350px]">Although The Starry Night was painted during the day in Van Gogh's
          ground-floor studio, it would be inaccurate to state that the picture
          was painted from memory. The view has been identified as the one from
          his bedroom window, facing east, a view which Van Gogh painted
          variations of no fewer than twenty-one times, including The Starry
          Night. "Through the iron-barred window," he wrote to his brother,
          Theo, around 23 May 1889, "I can see an enclosed square of wheat ...
          above which, in the morning, I watch the sun rise in all its glory."</p>

          <p className="mt-20">Go to source</p>
        </div>
      </div>
    </>
  );
};

export default ViewArt;
