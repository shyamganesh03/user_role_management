import { ThemeProvider } from "@/lib/components/theme-provider";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./config";

function App({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
