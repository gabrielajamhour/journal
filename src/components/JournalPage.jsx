import FlippingPage from "./FlippingPage";

export default function JournalPage({
  leftEntry,
  rightEntry,
  flippingEntry,
  flippingKey,
  onFlipEnd,
}) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e9e4d8",
        fontFamily: "serif",
      }}
    >
      {/* Book container. `position: relative` so the flipping overlay
          can be positioned absolutely on top of the right page. */}
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "900px",
          height: "600px",
          flexShrink: 0,
          perspective: "2000px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        {/* Left page — always static, never animates */}
        <div
          style={{
            width: "450px",
            boxSizing: "border-box",
            background: "#fbf7ef",
            padding: "40px",
            overflow: "hidden",
          }}
        >
          {leftEntry && (
            <>
              <h2 style={{ marginTop: 0 }}>{leftEntry.title}</h2>
              <p style={{ lineHeight: 1.6 }}>{leftEntry.content}</p>
            </>
          )}
        </div>

        {/* Right page underneath — always shows the DESTINATION content.
            During a flip, the overlay physically covers this until it
            has rotated past ~90deg, at which point backfaceVisibility
            hides the overlay's front face and this becomes visible. */}
        <div
          style={{
            width: "450px",
            boxSizing: "border-box",
            background: "#f7f1e3",
            padding: "40px",
            overflow: "hidden",
          }}
        >
          {rightEntry && (
            <>
              <h2 style={{ marginTop: 0 }}>{rightEntry.title}</h2>
              <p style={{ lineHeight: 1.6 }}>{rightEntry.content}</p>
            </>
          )}
        </div>

        {/* Flipping overlay — only exists while a flip is happening.
            `key={flippingKey}` forces a fresh DOM node per flip, so a
            transition never has old state left over to reverse from. */}
        {flippingEntry && (
          <FlippingPage key={flippingKey} entry={flippingEntry} onFlipEnd={onFlipEnd} />
        )}
      </div>
    </div>
  );
}
