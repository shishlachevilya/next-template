const easing = [0.175, 0.85, 0.42, 0.96];

const fadeInUp = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: '-20px'
  }
};

const pageTransition = {
  // type: 'tween',
  ease: easing,
  duration: .6
};

export {
  fadeInUp,
  pageTransition
}
