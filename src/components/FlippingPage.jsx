import { useEffect, useState } from "react";

// This component represents ONE physical page turn.
// It is mounted fresh (via `key`) for every flip and unmounted
// as soon as the flip finishes — it never animates "back".
export default function FlippingPage({ entry, onFlipEnd }) {
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    // We mount at rotateY(0deg). If we set rotated=true in the very
    // same tick, the browser might paint straight at -180deg with no
    // visible transition. Waiting two animation frames guarantees the
    // browser has painted the 0deg state first, so the transition to
    // -180deg is actually visible.
    const frame1 = requestAnimationFrame(() => {
      const frame2 = requestAnimationFrame(() => setRotated(true));
      return () => cancelAnimationFrame(frame2);
    });
    return () => cancelAnimationFrame(frame1);
  }, []);

  return (
    <div
      onTransitionEnd={onFlipEnd}
      style={{
        position: "absolute",
        top: 0,
        left: "450px",
        width: "450px",
        height: "100%",
        boxSizing: "border-box",
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        transition: "transform 0.68s ease",
        transform: rotated ? "rotateY(-180deg)" : "rotateY(0deg)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxSizing: "border-box",
          background: "#f7f1e3",
          padding: "40px",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{entry.title}</h2>
        <p style={{ lineHeight: 1.6 }}>{entry.content}</p>
      </div>
    </div>
  );
}
