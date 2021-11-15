import { useState, useEffect } from 'react';

const useCarrousel = (dataArray) => {
  const [carrouselState, setCarrouselState] = useState({
    numberOfItems: dataArray.length - 1,
    currentItem: 0
  });

  useEffect(() => {
    setCarrouselState({
      numberOfItems: dataArray.length - 1,
      currentItem: 0
    });
  }, [dataArray.toString()]);

  return [
    carrouselState,
    (direction) => {
      if (
        direction === 'NEXT' &&
        carrouselState.currentItem + 1 <= carrouselState.numberOfItems
      ) {
        setCarrouselState((prevData) => ({
          ...prevData,
          currentItem: carrouselState.currentItem + 1
        }));
      } else if (
        direction === 'PREVIOUS' &&
        carrouselState.currentItem - 1 >= 0
      ) {
        setCarrouselState((prevData) => ({
          ...prevData,
          currentItem: carrouselState.currentItem - 1
        }));
      }
    }
  ];
};

export default useCarrousel;
