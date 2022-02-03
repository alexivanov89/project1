import { FC, ReactNode, useMemo } from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { shape } from '../shape';
import { palette } from '../palette';
import { typography } from '../typography';
import { componentsOverrides } from '../overrides';
import { breakpoints } from '../breakpoints';
import { mixins } from '../mixins';
import { shadows, customShadows } from '../shadows';

export const ThemeConfig: FC<ReactNode> = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
      mixins,
    }),
    [],
  );
  //@ts-ignore
  const theme = createTheme(themeOptions);
  theme.components = componentsOverrides();
  theme.breakpoints.values = breakpoints.values;

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
