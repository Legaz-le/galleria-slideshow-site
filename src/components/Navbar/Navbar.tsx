import { Link, useLocation } from "react-router-dom";
import data from "../../../starter-code/data.json";

const Navbar = () => {
  const location = useLocation();

  const isGalleryPage = location.pathname === "/";

  const firstArtName = encodeURIComponent(data[0].name);
  return (
    <>
      <nav className="w-full bg-white py-6">
        {/* Centered content container */}
        <div className="max-w-[1340px] mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <img
              src="/assets/shared/logo.svg"
              alt="logo"
              className="md:h-9 lg:h-12"
            />
          </Link>

          {isGalleryPage ? (
            <Link to={`/art/${firstArtName}`}>
              <button className="text-sm md:text-base text-gray-400 hover:text-black hover:underline uppercase tracking-wide transition">
                Start slideshow
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button className="text-sm md:text-base text-gray-400 hover:text-black hover:underline uppercase tracking-wide transition">
                Return to gallery
              </button>
            </Link>
          )}
        </div>

        {/* Full-width horizontal line */}
        <hr className="border-t border-gray-200 w-full  xl:w-[1340px] mx-auto mt-10" />
      </nav>
      {/* thin divider */}
    </>
  );
};

export default Navbar;
