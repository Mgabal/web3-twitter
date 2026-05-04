import { useState } from "react"
import {
  ConnectButton,
  useActiveAccount,
  useReadContract,
  TransactionButton,
} from "thirdweb/react"
import { prepareContractCall } from "thirdweb"
import { client } from "./client"
import { contract } from "./contract"
import { sepolia } from "thirdweb/chains"

// ─────────────────────────────────────────────
//  TWEET CARD COMPONENT
// ─────────────────────────────────────────────
// A component is a reusable piece of UI.
// We write TweetCard once and reuse it for every tweet in the feed.

function TweetCard({ tweet, account, refetchTweets }) {
  // tweet         → the tweet object from the blockchain
  // account       → the connected wallet (to know who's liking)
  // refetchTweets → refreshes the feed after a like/unlike

  // Read whether THIS wallet already liked this tweet
  const { data: hasLiked, refetch: refetchLike } = useReadContract({
    contract,
    method: "function hasLiked(uint256 _id, address _user) returns (bool)",
    params: [tweet.id, account?.address],
  })

  // Convert Unix timestamp (seconds) → readable date string
  // * 1000 because JavaScript uses milliseconds, blockchain uses seconds
  const date = new Date(Number(tweet.timestamp) * 1000).toLocaleString()

  return (
    <div style={styles.tweetCard}>
      {/* Author + timestamp row */}
      <div style={styles.tweetHeader}>
        <span style={styles.tweetAuthor}>
          {tweet.author.slice(0, 6)}...{tweet.author.slice(-4)}
        </span>
        <span style={styles.tweetDate}>{date}</span>
      </div>

      {/* Tweet text */}
      <p style={styles.tweetContent}>{tweet.content}</p>

      {/* Like / Unlike button */}
      <div style={styles.tweetFooter}>
        <TransactionButton
          style={{
            ...styles.likeButton,
            color: hasLiked ? "#f4212e" : "#888",
            borderColor: hasLiked ? "#f4212e44" : "#333",
            // Red when liked, grey when not
          }}
          transaction={() =>
            prepareContractCall({
              contract,
              // Toggle: if already liked → unlike, otherwise → like
              method: hasLiked
                ? "function unlikeTweet(uint256 _id)"
                : "function likeTweet(uint256 _id)",
              params: [tweet.id],
            })
          }
          onTransactionConfirmed={() => {
            refetchLike()    // update heart color immediately
            refetchTweets()  // update like count in the feed
          }}
          onError={(e) => alert("Error: " + e.message)}
        >
          {hasLiked ? "❤️" : "🤍"} {tweet.likeCount.toString()}
        </TransactionButton>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  MAIN APP COMPONENT
// ─────────────────────────────────────────────

function App() {
  const account = useActiveAccount()
  // account → null if wallet not connected
  // account.address → "0xAbc123..." if connected

  const [username, setUsername]         = useState("")
  const [tweetContent, setTweetContent] = useState("")
  const [activeTab, setActiveTab]       = useState("feed")
  // activeTab → controls which tab is showing: "feed" or "compose"

  // ── Read user profile from contract ──
  const { data: profile, refetch: refetchProfile } = useReadContract({
    contract,
    method: "function getProfile(address _user) returns ((string username, bool isRegistered, uint256 tweetCount))",
    params: [account?.address],
    // account?.address → safely returns undefined if account is null
    // useReadContract skips the call when params contain undefined
  })

  // ── Read total tweet count ──
  const { data: tweetsCount, refetch: refetchCount } = useReadContract({
    contract,
    method: "function getTweetsCount() returns (uint256)",
  })

  // ── Fetch up to 20 tweets individually ──
  // WHY individually? React's Rules of Hooks say you CANNOT call hooks
  // inside a loop (.map). Hooks must always be called in the exact same
  // order every render. So we declare each one separately at the top level.
  // This supports up to 20 tweets — perfect for a testnet demo.
  const { data: tweet0  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [0n]  })
  const { data: tweet1  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [1n]  })
  const { data: tweet2  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [2n]  })
  const { data: tweet3  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [3n]  })
  const { data: tweet4  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [4n]  })
  const { data: tweet5  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [5n]  })
  const { data: tweet6  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [6n]  })
  const { data: tweet7  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [7n]  })
  const { data: tweet8  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [8n]  })
  const { data: tweet9  } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [9n]  })
  const { data: tweet10 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [10n] })
  const { data: tweet11 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [11n] })
  const { data: tweet12 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [12n] })
  const { data: tweet13 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [13n] })
  const { data: tweet14 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [14n] })
  const { data: tweet15 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [15n] })
  const { data: tweet16 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [16n] })
  const { data: tweet17 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [17n] })
  const { data: tweet18 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [18n] })
  const { data: tweet19 } = useReadContract({ contract, method: "function getTweet(uint256 _id) returns ((uint256 id, address author, string content, uint256 timestamp, uint256 likeCount, bool isDeleted))", params: [19n] })

  // Collect all fetched tweets into one array, filter out:
  // - undefined (tweets that don't exist yet / still loading)
  // - deleted tweets (isDeleted flag from our contract)
  // Then reverse so newest tweet appears at the top
  const tweets = [
    tweet0,  tweet1,  tweet2,  tweet3,  tweet4,
    tweet5,  tweet6,  tweet7,  tweet8,  tweet9,
    tweet10, tweet11, tweet12, tweet13, tweet14,
    tweet15, tweet16, tweet17, tweet18, tweet19,
  ]
    .filter(Boolean)
    .filter((t) => !t.isDeleted)
    .reverse()

  // Called after a tweet is posted or liked — triggers a re-read
  const refetchTweets = () => refetchCount()

  // ── NOT CONNECTED screen ──
  if (!account) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.logo}>🐦 Web3 Twitter</h1>
          <ConnectButton client={client} chain={sepolia} />
        </div>
        <div style={styles.main}>
          <div style={styles.card}>
            <h2 style={{ marginTop: 0 }}>Connect your wallet to get started</h2>
            <p style={styles.subtext}>Use the button in the top right ↗</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>

      {/* ── HEADER ── */}
      <div style={styles.header}>
        <h1 style={styles.logo}>🐦 Web3 Twitter</h1>
        <ConnectButton client={client} chain={sepolia} />
      </div>

      <div style={styles.main}>

        {/* ════════════════════════════════════════
            NOT REGISTERED → show registration form
            ════════════════════════════════════════ */}
        {!profile?.isRegistered ? (
          <div style={styles.card}>
            <h2 style={{ marginTop: 0 }}>Create your profile 👤</h2>
            <p style={styles.subtext}>Choose a username to start tweeting on-chain</p>

            <input
              style={styles.input}
              type="text"
              placeholder="Enter username (max 32 chars)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // onChange fires on every keystroke and saves the value to state
              maxLength={32}
            />

            <TransactionButton
              style={{
                ...styles.button,
                opacity: username.trim().length === 0 ? 0.5 : 1,
              }}
              transaction={() =>
                prepareContractCall({
                  contract,
                  method: "function registerUser(string calldata _username)",
                  params: [username],
                  // params must match the order of arguments in the contract function
                })
              }
              onTransactionConfirmed={() => {
                // Runs AFTER blockchain confirms — not just after MetaMask signs
                setUsername("")
                refetchProfile()
              }}
              onError={(e) => alert("Registration failed: " + e.message)}
              disabled={username.trim().length === 0}
            >
              Register Username
            </TransactionButton>
          </div>

        ) : (

          /* ════════════════════════════════════════
             REGISTERED → show profile + tabs + feed
             ════════════════════════════════════════ */
          <div>

            {/* Profile bar */}
            <div style={styles.profileBar}>
              <div>
                <p style={styles.profileName}>@{profile.username}</p>
                <p style={styles.subtext}>
                  {account.address.slice(0, 6)}...{account.address.slice(-4)}
                </p>
              </div>
              <div style={styles.tweetCountBadge}>
                <span style={styles.tweetCountNumber}>
                  {profile.tweetCount.toString()}
                </span>
                <span style={styles.subtext}>tweets</span>
              </div>
            </div>

            {/* Tab switcher — Feed | + New Tweet */}
            <div style={styles.tabs}>
              <button
                style={{
                  ...styles.tab,
                  borderBottom: activeTab === "feed"
                    ? "2px solid #1d9bf0"
                    : "2px solid transparent",
                  color: activeTab === "feed" ? "#fff" : "#888",
                }}
                onClick={() => setActiveTab("feed")}
              >
                Feed
              </button>
              <button
                style={{
                  ...styles.tab,
                  borderBottom: activeTab === "compose"
                    ? "2px solid #1d9bf0"
                    : "2px solid transparent",
                  color: activeTab === "compose" ? "#fff" : "#888",
                }}
                onClick={() => setActiveTab("compose")}
              >
                ✏️ New Tweet
              </button>
            </div>

            {/* ── COMPOSE TAB ── */}
            {activeTab === "compose" && (
              <div style={styles.card}>
                <p style={{ ...styles.profileName, marginBottom: "12px" }}>
                  @{profile.username}
                </p>

                <textarea
                  style={styles.textarea}
                  placeholder="What's happening on-chain? 🌐"
                  value={tweetContent}
                  onChange={(e) => setTweetContent(e.target.value)}
                  maxLength={280}
                  rows={4}
                />

                {/* Character counter — turns red near the limit */}
                <p style={{
                  ...styles.subtext,
                  textAlign: "right",
                  color: tweetContent.length > 260 ? "#f4212e" : "#888",
                }}>
                  {tweetContent.length} / 280
                </p>

                <TransactionButton
                  style={{
                    ...styles.button,
                    opacity: tweetContent.trim().length === 0 ? 0.5 : 1,
                  }}
                  transaction={() =>
                    prepareContractCall({
                      contract,
                      method: "function createTweet(string calldata _content)",
                      params: [tweetContent],
                    })
                  }
                  onTransactionConfirmed={() => {
                    setTweetContent("")   // clear the textarea
                    refetchProfile()      // update tweet count in profile bar
                    refetchTweets()       // refresh the feed
                    setActiveTab("feed")  // switch to feed so user sees new tweet
                  }}
                  onError={(e) => alert("Tweet failed: " + e.message)}
                  disabled={tweetContent.trim().length === 0}
                >
                  Tweet 🐦
                </TransactionButton>
              </div>
            )}

            {/* ── FEED TAB ── */}
            {activeTab === "feed" && (
              <div>
                {/* Show total tweet count */}
                {tweetsCount !== undefined && (
                  <p style={{ ...styles.subtext, marginBottom: "12px" }}>
                    {tweets.length} tweet{tweets.length !== 1 ? "s" : ""} on-chain
                  </p>
                )}

                {/* Empty state */}
                {tweets.length === 0 ? (
                  <div style={styles.card}>
                    <p style={{ ...styles.subtext, textAlign: "center", padding: "24px 0" }}>
                      No tweets yet. Be the first to post! 🚀
                    </p>
                  </div>
                ) : (
                  // .map() loops over the tweets array and renders one TweetCard per tweet
                  // key= is required by React to efficiently track list items
                  tweets.map((tweet) => (
                    <TweetCard
                      key={tweet.id.toString()}
                      tweet={tweet}
                      account={account}
                      refetchTweets={refetchTweets}
                    />
                  ))
                )}
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  STYLES
// ─────────────────────────────────────────────

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 24px",
    borderBottom: "1px solid #1f1f1f",
    position: "sticky",
    top: 0,
    backgroundColor: "#000",
    zIndex: 10,
    backdropFilter: "blur(12px)",
    // sticky so it stays visible when scrolling the feed
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "800",
    letterSpacing: "-0.5px",
  },
  main: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "16px",
  },
  card: {
    border: "1px solid #1f1f1f",
    borderRadius: "16px",
    padding: "24px",
    marginBottom: "16px",
    backgroundColor: "#0a0a0a",
  },
  profileBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    marginBottom: "4px",
  },
  profileName: {
    fontSize: "18px",
    fontWeight: "700",
    margin: "0 0 2px 0",
    color: "#fff",
  },
  tweetCountBadge: {
    textAlign: "center",
    backgroundColor: "#0a0a0a",
    border: "1px solid #1f1f1f",
    borderRadius: "12px",
    padding: "8px 16px",
  },
  tweetCountNumber: {
    display: "block",
    fontSize: "22px",
    fontWeight: "800",
    color: "#1d9bf0",
    lineHeight: 1,
  },
  tabs: {
    display: "flex",
    borderBottom: "1px solid #1f1f1f",
    marginBottom: "16px",
  },
  tab: {
    flex: 1,
    padding: "14px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "700",
    transition: "color 0.15s",
  },
  tweetCard: {
    border: "1px solid #1f1f1f",
    borderRadius: "16px",
    padding: "16px 20px",
    marginBottom: "1px",
    backgroundColor: "#0a0a0a",
    transition: "background-color 0.15s",
  },
  tweetHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  tweetAuthor: {
    fontWeight: "700",
    color: "#1d9bf0",
    fontFamily: "monospace",
    fontSize: "13px",
    backgroundColor: "#1d9bf011",
    padding: "2px 8px",
    borderRadius: "6px",
  },
  tweetDate: {
    color: "#555",
    fontSize: "12px",
  },
  tweetContent: {
    margin: "0 0 14px 0",
    lineHeight: "1.6",
    fontSize: "15px",
    color: "#e7e9ea",
  },
  tweetFooter: {
    display: "flex",
    gap: "8px",
  },
  likeButton: {
    backgroundColor: "transparent",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "5px 14px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.15s",
    minWidth: "60px",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #1f1f1f",
    backgroundColor: "#111",
    color: "#fff",
    fontSize: "16px",
    marginBottom: "12px",
    boxSizing: "border-box",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #1f1f1f",
    backgroundColor: "#111",
    color: "#fff",
    fontSize: "16px",
    resize: "none",
    boxSizing: "border-box",
    outline: "none",
    lineHeight: "1.5",
  },
  button: {
    width: "100%",
    padding: "13px",
    borderRadius: "50px",
    backgroundColor: "#1d9bf0",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    marginTop: "8px",
    transition: "background-color 0.15s",
  },
  subtext: {
    color: "#555",
    fontSize: "13px",
    margin: "0 0 8px 0",
  },
}

export default App
