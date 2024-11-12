import { useState, useEffect, useRef } from "react";

const useHorizontalScroll = () => {
    const carouselContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft]     = useState(false);
    const [canScrollRight, setCanScrollRight]   = useState(false);

    useEffect(() => {
        const carouselContainer = carouselContainerRef.current;

        setCanScrollLeft(carouselContainer.scrollLeft > 0);
        setCanScrollRight(
          carouselContainer.scrollLeft < 
          carouselContainer.scrollWidth - carouselContainer.clientWidth
        );

        const updateScroll = () => {
          setCanScrollLeft(carouselContainer.scrollLeft > 0);
          setCanScrollRight(
            carouselContainer.scrollLeft < 
            carouselContainer.scrollWidth - carouselContainer.clientWidth
          );
        };

        carouselContainer.addEventListener("scroll", updateScroll);
        return () => carouselContainer.removeEventListener("scroll", updateScroll);
      }, []);
    
      const handleCarouselScroll = (e, direction) => {
        e.preventDefault();
        const carouselContainer = carouselContainerRef.current;
        const containerWidth = carouselContainer.clientWidth;

        if (direction === "left") {
          carouselContainer.scrollLeft -= containerWidth;
        } else if (direction === "right") {
          carouselContainer.scrollLeft += containerWidth;
        }
      };

    return {
        carouselContainerRef,
        canScrollLeft,
        canScrollRight,
        handleCarouselScroll
    };

};

export default useHorizontalScroll;