import { ThemeProvider } from "@/components/theme-provider"
import Account from "./components/Account"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Account/>
    </ThemeProvider>
  )
}

export default App