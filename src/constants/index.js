export * from './strings';
export const SCREEN = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};

export const PRIMARY_COLOR_CODE = '#1da57a';
export const DEFAULT_PAGE_SIZE = 10;

// Regular expressions
export const INT_REGEX = /^[0-9]*$/;
export const POSITIVE_INT_REGEX = /^[1-9][0-9]*$/;
export const FLOAT_REGEX = /^[+-]?([0-9]*[.])?[0-9]+$/;
export const POSITIVE_FLOAT_REGEX = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;
export const ZIP_CODE_REGEX = /^[0-9]{6}$|^[0-9]{5}(?:-[0-9]{4})?$/;
