import { useScrollToTop } from "hooks";
import { Router } from "router";
import { ThemeProvider } from "theme";

export default function App() {
  console.log(`

░░░    ░░░ 
▒▒▒▒  ▒▒▒▒ 
▒▒ ▒▒▒▒ ▒▒ 
▓▓  ▓▓  ▓▓ 
██      ██ 
  
  `);

  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
