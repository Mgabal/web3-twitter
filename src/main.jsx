import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThirdwebProvider } from "thirdweb/react"
import App from "./App.jsx"
import "./index.css"

// ThirdwebProvider is like a "context wrapper" — it makes wallet
// and contract features available to every component inside your app.
// Without this, nothing web3-related will work.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </StrictMode>
)