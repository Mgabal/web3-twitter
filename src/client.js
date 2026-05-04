import { createThirdwebClient } from "thirdweb"

// Your Client ID comes from thirdweb.com/dashboard
// It identifies your app — like an API key but safe to use in frontend code
export const client = createThirdwebClient({
  clientId: "905379194446dec37435f3b773f75c23", // ← paste from thirdweb dashboard
})