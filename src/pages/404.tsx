import { Button, Container, Grid, Typography } from "@mui/joy";
import { MuiLink } from "components";

export default function NotFound() {
  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Typography fontSize="h1">404</Typography>
        <Typography fontSize="h4">Page not found</Typography>
        <Button component={MuiLink} to="/">
          Go to home
        </Button>
      </Grid>
    </Container>
  );
}
