import Box, { BoxProps } from "@mui/joy/Box";
import LinearProgress from "@mui/joy/LinearProgress";

export function LoadingScreen({ sx, ...other }: BoxProps) {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
        {...other}
      >
        <LinearProgress sx={{ width: 1, maxWidth: 360, color: "inherit" }} />
      </Box>
    </>
  );
}
