# 🐦 Web3 Twitter

A decentralized social media platform built on the Ethereum blockchain. Post tweets, build your on-chain identity, and like content — all without a centralized authority.

> **Live Demo:** [web3-twitter-ebon.vercel.app](https://web3-twitter-ebon.vercel.app)  
> **Contract:** [Sepolia Etherscan](https://sepolia.etherscan.io/address/YOUR_CONTRACT_ADDRESS)

---

## ✨ Features

- **On-Chain Profiles** — Register a username tied to your wallet address
- **Decentralized Feed** — Post tweets stored permanently on the blockchain
- **Like System** — Like and unlike tweets with double-like prevention
- **Tweet Moderation** — Authors can delete their own tweets; owner can moderate any
- **Wallet Auth** — No passwords, no accounts — just connect your wallet
- **Real-Time Events** — All actions emit blockchain events for live UI updates

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Smart Contract | Solidity 0.8.20 |
| Blockchain | Ethereum Sepolia Testnet |
| Frontend | React 18 + Vite |
| Web3 SDK | thirdweb v5 |
| Deployment | Vercel |

---

## 📋 Smart Contract

The `Twitter.sol` contract handles all on-chain logic:

```
registerUser(username)     → Create your on-chain profile
createTweet(content)       → Post a tweet (max 280 chars)
deleteTweet(id)            → Soft-delete your tweet
likeTweet(id)              → Like a tweet
unlikeTweet(id)            → Unlike a tweet
getTweet(id)               → Read a single tweet
getTweetsByUser(address)   → Get all tweets by a wallet
getProfile(address)        → Get a user's profile
hasLiked(id, address)      → Check if wallet liked a tweet
```

### Security Features
- Max tweet length enforced on-chain (280 chars)
- Username validation (1–32 chars)
- Soft deletion preserves tweet IDs
- Double-like prevention via nested mapping
- Owner moderation for content safety

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 18+](https://nodejs.org)
- [MetaMask](https://metamask.io) browser extension
- Sepolia testnet ETH — get some free at [sepoliafaucet.com](https://sepoliafaucet.com)

### Installation

```bash
# Clone the repo
git clone https://github.com/Mgabal/web3-twitter.git
cd web3-twitter

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
```

Get your Client ID from [thirdweb.com/dashboard](https://thirdweb.com/dashboard)

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
web3-twitter/
├── contracts/
│   └── Twitter.sol          # Smart contract
├── src/
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point + ThirdwebProvider
│   ├── client.js            # thirdweb client config
│   └── contract.js          # Contract reference
├── vercel.json              # Vercel CSP config
├── .env                     # Environment variables (not committed)
└── package.json
```

---

## 🔗 How It Works

```
User connects wallet (MetaMask)
        ↓
Registers username on-chain
        ↓
Posts tweets → stored in contract forever
        ↓
Other users read the feed → free, no gas
        ↓
Users like tweets → transaction on Sepolia
```

---

## 🗺 Roadmap

- [ ] Tweet fee mechanism to eliminate spam
- [ ] Weekly reward pool for top tweets
- [ ] Token-gated community circles
- [ ] On-chain reputation score as soulbound token
- [ ] Retweet / quote tweet functionality
- [ ] IPFS media attachments
- [ ] Mainnet deployment

---

## 🤝 Contributing

Pull requests are welcome. For major changes please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 👤 Author

**Gabal**  
GitHub: [@Mgabal](https://github.com/Mgabal)

---

*Built with ❤️ on Ethereum*
