import { ThemeProvider } from "@/lib/components/theme-provider";
import { Provider } from "react-redux";
import store from "./store";
import "./config";
import AppRouter from "./navigation";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
