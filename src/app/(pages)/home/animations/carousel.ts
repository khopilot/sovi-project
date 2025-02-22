export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.8
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    scale: 0.8,
    zIndex: 0
  })
};

export const cardVariants = {
  left: {
    x: 'calc(-150% - 1rem)',
    scale: 0.85,
    opacity: 1,
    zIndex: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 1,
      duration: 0.5
    }
  },
  center: {
    x: '-50%',
    scale: 1,
    opacity: 1,
    zIndex: 2,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 1,
      duration: 0.5
    }
  },
  right: {
    x: 'calc(50% + 1rem)',
    scale: 0.85,
    opacity: 1,
    zIndex: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 1,
      duration: 0.5
    }
  }
}; 