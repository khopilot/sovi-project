import { useState, useEffect, useCallback, useRef } from 'react';

export interface VisibleProduct {
  index: number;
  position: 'left' | 'center' | 'right';
}

export function useCarousel(totalSlides: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, []);

  const getVisibleProducts = useCallback((): VisibleProduct[] => {
    if (!isMounted) return [];
    
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentIndex + 1) % totalSlides;

    return [
      { index: prevIndex, position: 'left' },
      { index: currentIndex, position: 'center' },
      { index: nextIndex, position: 'right' },
    ];
  }, [currentIndex, totalSlides, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    autoPlayTimeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 1500);

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [isMounted, totalSlides, currentIndex]);

  const handleNext = useCallback(() => {
    if (!isMounted) return;
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides, isMounted]);

  const handlePrev = useCallback(() => {
    if (!isMounted) return;
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides, isMounted]);

  const goToSlide = useCallback((index: number) => {
    if (!isMounted) return;
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex, isMounted]);

  return {
    currentIndex,
    direction,
    isMounted,
    visibleProducts: getVisibleProducts(),
    handleNext,
    handlePrev,
    goToSlide
  };
}
