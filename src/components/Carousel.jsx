import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ACTIONS = {
  NEXT: "NEXT",
  PREVIOUS: "PREVIOUS",
};

const Carousel = ({
  carouselTitle,
  elementsTotal,
  visibleElements,
  showButtons = true,
  noGap = true,
  animate,
  children,
}) => {
  const pages = Math.ceil(elementsTotal / visibleElements);
  const [currentPage, setCurrentPage] = useState(0);
  const [clicked, setClicked] = useState(false);

  function changePage(action) {
    switch (action) {
      case ACTIONS.NEXT:
        if (clicked) break;
        if (currentPage >= pages - 1) setCurrentPage(0);
        else setCurrentPage((prev) => prev + 1);
        break;
      case ACTIONS.PREVIOUS:
        if (currentPage <= 0 || clicked) break;
        setCurrentPage((prev) => prev - 1);
        break;
      default:
        console.log("No case worked");
        break;
    }
    setClicked(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => setClicked(false), 800);

    return () => clearTimeout(timer);
  }, [clicked]);

  useEffect(() => {
    setCurrentPage(0);
  }, [children]);

  useInterval(
    () => {
      changePage(ACTIONS.NEXT);
    },
    !clicked && animate ? 5000 : null
  );

  const widthPercentege = (100 * elementsTotal) / visibleElements;
  const widthGap =
    (noGap ? 0 : 20 * elementsTotal) / visibleElements - noGap ? 0 : 20;
  const calcString = "calc(" + widthPercentege + "% + " + widthGap + "px)";

  return (
    <div className="flex flex-col gap-y-[8px]">
      {carouselTitle && (
        <h3 className="text-[24px] font-bold">{carouselTitle}</h3>
      )}
      <div className="relative">
        <div
          className={`
          grid
          grid-flow-col
          grid-cols-[repeat(${elementsTotal}, 1fr)]
          ${noGap ? "0" : "gap-x-[20px]"}
          transition ease-in-out duration-[800ms] transform
          `}
          style={{
            width: calcString,
            transform: `translateX(calc((-${
              (100 * visibleElements) / elementsTotal
            }% - ${
              noGap ? 0 : 20 * (visibleElements / elementsTotal)
            }px) * ${currentPage})`,
          }}
        >
          {children}
        </div>
        {showButtons && (
          <>
            <div
              className="
          absolute 
          left-0 
          top-0 
          z-10 
          cursor-pointer
          h-full
          flex
          flex-wrap
          content-center
          px-2
          shadow-[0_0_10px_15px_#1f1f1f]
          bg-[#1f1f1f]
          hover:bg-[#131313]
          hover:shadow-[0_0_10px_15px_#131313]
          "
              onClick={() => changePage(ACTIONS.PREVIOUS)}
            >
              <FaArrowLeft color="white" />
            </div>
            <div
              className="
        absolute 
        right-0 
        top-0 
        z-10 
        cursor-pointer
        h-full
        flex
        flex-wrap
        content-center
        px-2
        shadow-[0_0_10px_15px_#1f1f1f]
        bg-[#1f1f1f]
        hover:bg-[#131313]
        hover:shadow-[0_0_10px_15px_#131313]
        "
              onClick={() => changePage(ACTIONS.NEXT)}
            >
              <FaArrowRight color="white" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
