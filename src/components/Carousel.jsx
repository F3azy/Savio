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
  gap = 0,
  gapClass = "gap-x-0",
  gridColTem = "grid-cols-[repeat(0,_1fr)]",
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

  useInterval(
    () => {
      changePage(ACTIONS.NEXT);
    },
    !clicked && animate ? 5000 : null
  );

  const widthPercentege = (100 * elementsTotal) / visibleElements;
  const widthGap = (gap * elementsTotal) / visibleElements - gap;
  const calcString = "calc(" + widthPercentege + "% + " + widthGap + "px)";

  const divClassName = `
  grid
  grid-flow-col
  ${gridColTem + " " + gapClass}
  transition ease-in-out duration-[800ms]`;

  return (
    <div className="relative">
      <div className="overflow-x-hidden">
        <div
          className={divClassName}
          style={{
            width: calcString,
            transform: `translateX(calc((-${
              (100 * visibleElements) / elementsTotal
            }% - ${
              gap * (visibleElements / elementsTotal)
            }px) * ${currentPage})`,
          }}
        >
          {children}
        </div>
      </div>
      {showButtons && (
        <>
          <div
            className="
          absolute 
          -left-8 
          top-0 
          z-10 
          h-full
          flex
          items-center
          "
          >
            <FaArrowLeft
              className="cursor-pointer hover:text-brand-secondary"
              size={25}
              onClick={() => changePage(ACTIONS.PREVIOUS)}
            />
          </div>
          <div
            className="
        absolute 
        -right-8
        top-0 
        z-10 
        h-full
        flex
        items-center
        "
          >
            <FaArrowRight
              className="cursor-pointer hover:text-brand-secondary"
              size={25}
              onClick={() => changePage(ACTIONS.NEXT)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
