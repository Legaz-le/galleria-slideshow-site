const Progression_bar = () => {
  return (
      <div className="mt-20 max-w-[1310px] mx-auto px-4">
      <div className="border-t border-gray-200 w-full py-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg">Starry Night</h3>
            <p className="text-gray-500">Vincent Van Gogh</p>
          </div>
          
          <div className="flex gap-5">
            <img 
              src="/assets/shared/icon-back-button.svg" 
              alt="back-button" 
              className="cursor-pointer w-6 h-6"
            />
            <img 
              src="/assets/shared/icon-next-button.svg" 
              alt="next-button" 
              className="cursor-pointer w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progression_bar
