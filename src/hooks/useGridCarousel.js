import { useState } from "react";

const useGridCarousel = (totalItems, itemsPerView) => {
  const [currentView, setCurrentView] = useState(0);
  const totalViews = Math.ceil(totalItems / itemsPerView);

  const handlePageViewRight = () => {
    setCurrentView((prev) => Math.min(prev + 1, totalViews - 1));
  };

  const handlePageViewLeft = () => {
    setCurrentView((prev) => Math.max(prev - 1, 0));
  };

  const startIndex = currentView * itemsPerView;
  const endIndex = Math.min(startIndex + itemsPerView, totalItems);

  return {
    currentView,
    totalViews,
    handlePageViewRight,
    handlePageViewLeft,
    startIndex,
    endIndex,
  };
};

export default useGridCarousel;
