import GameCanvas from "./GameCanvas";

function App() {
  return (
    // The wrapper takes up the full viewport (100vw/100vh).
    // Flexbox ensures the canvas is perfectly centered.
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222", // Dark grey border for letterboxing
        margin: 0,
        padding: 0,
        overflow: "hidden", // Prevents scrollbars from appearing
      }}
    >
      <GameCanvas />
    </div>
  );
}

export default App;
