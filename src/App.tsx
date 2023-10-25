import { useScrollToTop } from "hooks";
import { Router } from "router";
import { ThemeProvider } from "theme";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
