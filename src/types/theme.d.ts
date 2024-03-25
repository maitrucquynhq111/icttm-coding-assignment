import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {}
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    direction?: string;
    palette: any;
    mixins?: any;
    typography?: any;
    customShadows?: any;
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
