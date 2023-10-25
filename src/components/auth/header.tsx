import { BadgeRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/joy";
import { ColorSchemeToggle } from "components";

export function AuthHeader() {
  return (
    <Box
      component="header"
      sx={{
        py: 3,
        display: "flex",
        alignItems: "left",
        width: 400,
        maxWidth: "100%",
        mx: "auto",

        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          gap: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton variant="soft" color="primary" size="sm">
          <BadgeRounded />
        </IconButton>
        <Typography level="title-lg">Next POS</Typography>
      </Box>
      <ColorSchemeToggle />
    </Box>
  );
}
