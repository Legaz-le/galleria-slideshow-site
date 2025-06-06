import data from "../../starter-code/data.json"


const Main_page = () => {

  return (
    <>
    <div className="min-h-screen flex   justify-center items-center">
    <div className="w-full max-w-7xl  py-10 space-y-6 row- columns-1 sm:columns-2  lg:columns-4 px-2    ">
        {data.map((member) => (
            <div key={member.name} className="relative group cursor-pointer">
        <img
          key={member.name}
          src={member.images.thumbnail}
          alt={`${member.name} image`}
          className="mx-auto w-full bg-contain"
        />
        <div className="absolute inset-0  bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex flex-col justify-end p-4">
          <p className="text-white text-lg font-semibold">{member.name}</p>
          <p className="text-white text-sm italic">{member.artist.name}</p>
        </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Main_page
