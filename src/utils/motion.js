import { delay } from "framer-motion";

export const fadeIn = (direction, type, duration, delay, offset = 100) => {
  return {
    hidden: {
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      opacity: 0,
      when: "afterChildren",
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        type: type,
        ...(delay && { delay: delay }),
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, duration, delay, offset = 100) => {
  return {
    hidden: {
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      when: "afterChildren",
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        when: "beforeChildren",
        type: type,
        ...(delay && { delay: delay }),
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (duration, delay) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        ...(delay && { delay: delay }),
        duration: duration,
        ease: "linear",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren,
  delayChildren,
  staggerDir = 1
) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
        staggerDirection: staggerDir,
      },
    },
  };
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};
