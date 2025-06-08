import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <Link to="/art">
      <nav className="w-full flex justify-center py-6 mb-5 bg-white">
        <div className="w-full max-w-[1340px] px-4 flex justify-between items-center">
          <img src="/assets/shared/logo.svg" alt="logo" />
          <button className="text-sm md:text-base text-gray-400 hover:text-black hover:underline font-sans  transition uppercase tracking-wider">
            Start slideshow
          </button>
        </div>
      </nav>

      <div className="border border-gray-200 max-w-[1310px] w-full   mx-auto flex justify-center items-center mb-10">
       
        
      </div>
      </Link>
    </>
  );
};

export default Navbar;
