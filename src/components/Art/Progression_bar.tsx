type Props = {
  art: {
    name: string;
    artist: {
      name: string;
    };
    images: {
      hero: {
        large: string;
      };
    };
  };
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
};

const Progression_bar: React.FC<Props> = ({
  art,
  onNext,
  onPrev,
  currentIndex,
  total,
}) => {
  const progressPercentage = ((currentIndex + 1) / total) * 100;
  return (
    <div className="mt-20 max-w-[1310px] mx-auto px-4">
      <div className="relative border-t border-gray-200 w-full py-6">
        <div
          className="absolute left-0 top-0 h-[2px] bg-black transition-all duration-700 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg">{art.name}</h3>
            <p className="text-gray-500">{art.artist.name}</p>
          </div>

          <div className="flex gap-5 items-center">
            <img
              src="/assets/shared/icon-back-button.svg"
              alt="back-button"
              className="cursor-pointer w-6 h-6"
              onClick={onPrev}
            />
            <img
              src="/assets/shared/icon-next-button.svg"
              alt="next-button"
              className="cursor-pointer w-6 h-6"
              onClick={onNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progression_bar;
