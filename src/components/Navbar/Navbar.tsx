import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white py-6">
        <div className="max-w-[1340px] mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <img src="/assets/shared/logo.svg" alt="logo" className="h-12" />
          </Link>
          <Link to="/art">
          <button className="text-sm md:text-base text-gray-400 hover:text-black hover:underline uppercase tracking-wide transition">
            Start slideshow
          </button>
          </Link>
        </div>
      </nav>
      {/* thin divider */}
      <hr className="border-t border-gray-200 max-w-[1310px] mx-auto" />
    </>
  );
};

export default Navbar;
