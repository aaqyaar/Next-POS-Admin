import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

export function ThemeProvider(props: React.PropsWithChildren) {
  const theme = extendTheme({
    components: {
      JoyButton: {},
    },
  });
  return (
    <CssVarsProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {props.children}
    </CssVarsProvider>
  );
}
