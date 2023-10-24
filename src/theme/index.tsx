import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { alpha } from "@mui/material";

export function ThemeProvider(props: React.PropsWithChildren) {
  const theme = extendTheme({
    components: {
      JoyButton: {},
      JoyCard: {
        styleOverrides: {
          root: {
            position: "relative",
            // backgroundColor: "#fff",
            boxShadow: `0 0 1px 0 ${alpha(
              "#919EAB",
              0.5
            )}, 0 1px 20px -4px ${alpha("#919EAB", 0.1)}`,
            borderRadius: 8 * 1.3,
            zIndex: 0,
          },
        },
      },

      JoyCardContent: {
        styleOverrides: {
          root: {
            padding: 2 * 2,
          },
        },
      },
    },
  });

  return (
    <CssVarsProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {props.children}
    </CssVarsProvider>
  );
}
