import styles from './FeaturedSection.module.css';

interface CarouselNavigationProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export function CarouselNavigation({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onDotClick
}: CarouselNavigationProps) {
  return (
    <>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={onPrev}
        aria-label="Previous product"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.navIcon}>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={onNext}
        aria-label="Next product"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.navIcon}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className={styles.pagination} role="tablist">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to product ${index + 1}`}
            className={`${styles.paginationDot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </>
  );
} 