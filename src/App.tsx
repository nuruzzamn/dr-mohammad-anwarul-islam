/* Literary Practice direction: keep the app shell quiet, light and editorial so the page composition carries the identity. */
import { Toaster } from "@shared/components/ui/sonner";
import { TooltipProvider } from "@shared/components/ui/tooltip";
import { NotFound } from "@features/not-found";
import { Route, Switch } from "wouter";
import ErrorBoundary from "@shared/components/ErrorBoundary";
import { ThemeProvider } from "@shared/contexts/ThemeContext";
import { Home } from "@features/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
