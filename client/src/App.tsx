import { Switch, Route, Link, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";
import AuthPage from "./pages/auth-page";
import NotFound from "@/pages/not-found";
import { AuthProvider } from "./hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";

function Router() {
  const [location] = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath={location} />
      <main className="flex-grow">
        <Switch>
          <ProtectedRoute path="/" component={HomePage} />
          <ProtectedRoute path="/upload" component={UploadPage} />
          <Route path="/about" component={AboutPage} />
          <ProtectedRoute path="/settings" component={SettingsPage} />
          <Route path="/auth" component={AuthPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
