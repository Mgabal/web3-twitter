import { getContract } from "thirdweb"
import { sepolia } from "thirdweb/chains"
import { client } from "./client"

// getContract doesn't make any network request —
// it just creates a reference object your app uses
// whenever it needs to read from or write to your contract.
export const contract = getContract({
  client,
  chain: sepolia,                              // ← Sepolia testnet (where you deployed)
  address: "0x5821B3Af0316A4cCaACdebB99669740Ce655100b",       // ← paste your deployed contract address
})