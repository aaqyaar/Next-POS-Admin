import { Router } from "router";
import { ThemeProvider } from "theme";

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
