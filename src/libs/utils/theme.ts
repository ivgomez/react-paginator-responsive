import { css } from 'styled-components';

interface Breakpoints {
  [key: string]: string;
}

/* Media queries */
export const breakpoints: Breakpoints | any = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

/* Custom styles for styled-bootstrap-grid */
export const gridFunction = {
  breakpoints: {
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 576,
  },
  row: {
    padding: 0,
  },
  col: {
    padding: 8,
  },
  container: {
    padding: 16,
    maxWidth: {
      xl: 1264,
      lg: 1264,
      md: 1223,
      sm: 1223,
      xs: 1223,
    },
  },
};

/* For mobile-first design */
export const breakpoint = Object.keys(breakpoints).reduce(
  (acc: any, key: any) => {
    acc[key] = (literals: TemplateStringsArray, ...args: any[]) => css`
      @media screen and (min-width: ${breakpoints[key]}) {
        ${css(literals, ...args)}
      }
    `;
    return acc;
  },
  {}
);
