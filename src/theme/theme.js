const calcRem = (size) => `${size / 16}rem`;

const colors = {
  black: '#212529',
  lightGray: '#e9ecef',
  gray: '#dee2e6',
  white: '#f8f9fa',
  violet: '#a61e4d',
  pink: '#e64980',
  red: '#e03131',
  green: '#40c057',
  blue: '#339af0',
};

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(36),
  titleSize: calcRem(50),
};

const paddings = {
  small: calcRem(16),
  base: calcRem(32),
  lg: calcRem(48),
  xl: calcRem(64),
  xxl: calcRem(80),
  xxxl: calcRem(96),
};

const margins = {
  small: calcRem(16),
  base: calcRem(32),
  lg: calcRem(48),
  xl: calcRem(64),
  xxl: calcRem(80),
  xxxl: calcRem(96),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const theme = {
  colors,
  fontSizes,
  paddings,
  margins,
  interval,
};

export default theme;
