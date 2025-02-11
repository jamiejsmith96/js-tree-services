import { MantineTheme } from '@mantine/core';

export const SPACING = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  xxl: 64,
};

export const BREAKPOINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
};

export const getResponsiveValue = <T>(
  theme: MantineTheme,
  values: {
    base?: T;
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }
): T | Record<string, T> => {
  const breakpoints = Object.keys(values).filter(key => key !== 'base');
  
  if (breakpoints.length === 0) {
    return values.base as T;
  }

  const styles: Record<string, T> = {};
  if (values.base) {
    styles.base = values.base;
  }

  breakpoints.forEach(breakpoint => {
    const value = values[breakpoint as keyof typeof values];
    if (value !== undefined) {
      styles[`@media (min-width: ${theme.breakpoints[breakpoint]})`] = value;
    }
  });

  return styles;
};

export const getSectionSpacing = (theme: MantineTheme) => ({
  py: getResponsiveValue(theme, {
    base: SPACING.xl,
    md: SPACING.xxl,
  }),
  px: getResponsiveValue(theme, {
    base: SPACING.md,
    md: SPACING.xl,
  }),
});