export const getHeroTeaserVars = (width) => {
  const currentWidth = width ? width : window.innerWidth;

  return {
    web: {
      shadeOffset: (currentWidth * 219) / 1440,
      textOffset: (currentWidth * 43) / 1440,
      animationDuration: currentWidth > 900 ? 15 : currentWidth > 500 ? 20 : 30,
    },
    mobile: {
      shadeOffset: (currentWidth * 99) / 360,
      textOffset: (currentWidth * 124.7) / 360,
      animationDuration: 10,
    },
  };
};
