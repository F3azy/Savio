import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ACTIONS = {
  NEXT: "NEXT",
  PREVIOUS: "PREVIOUS",
};

const Carousel = ({
  elementsTotal,
  visibleElements,
  showButtons = true,
  noGap = true,
  gap = 0,
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
    (gap * elementsTotal) / visibleElements - gap;
  const calcString = "calc(" + widthPercentege + "% + " + widthGap + "px)";

  const buttonsWithGap = `relative px-[${gap + 32}px]`;

  const divClassName = `
  grid
  grid-flow-col
  grid-cols-[repeat(${elementsTotal},_1fr)]
  gap-x-[${gap}px]
  transition ease-in-out duration-[800ms] transform`;

  return (
    <div className={buttonsWithGap}>
      <div
        className={divClassName}
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
          rounded-r-xl
          bg-[#1f1f1f]
          hover:bg-[#131313]

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
        rounded-l-xl
        bg-[#1f1f1f]
        hover:bg-[#131313]
        "
            onClick={() => changePage(ACTIONS.NEXT)}
          >
            <FaArrowRight color="white" />
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
