
import { useEffect, useRef } from "react";
import data from "../../../starter-code/data.json";
import "./GalleryCss.css";
import { Link } from "react-router-dom";

const Main_page = () => {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if (galleryRef.current) {
    const galleryItem = galleryRef.current.querySelectorAll(".galleryItem");
    let delay = 0.03;
    galleryItem.forEach((item)=>{
      (item as HTMLElement).style.animationDelay = delay + "s";
      delay += 0.04;
    });
  }
  }, []);
  return (
    <>
      <div className="min-h-screen gallery relative " ref={galleryRef}>
      {data.map((member) => (
        <Link
          to={`/art/${encodeURIComponent(member.name)}`}
          key={member.name}
          className="galleryItem group"
        >
          <div className="relative w-full h-full">
            <img
              src={member.images.thumbnail}
              alt={`${member.name} image`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
              <p className="text-white text-lg font-semibold">{member.name}</p>
              <p className="text-white text-sm italic">{member.artist.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default Main_page;
