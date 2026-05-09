export default function JournalPage({ entry, isFlipping }) {
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
            {/* Book container */}
            <div
                style={{
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
                {/* Left Page */}
                <div
                    style={{
                        width: "450px",
                        background: "#fbf7ef",
                        padding: "40px",
                    }}
                >
                    <h2 style={{ marginTop: 0 }}>{entry.title}</h2>
                    <p style={{ lineHeight: 1.6 }}>{entry.content}</p>
                </div>

                {/* Right Page*/}
                <div
                    style={{
                        width: "450px",
                        boxSizing: "border-box",
                        flexShrink: 0,
                        position: "relative",
                        transformOrigin: "left center", // rotate like a real page attached at the spine
                        transformStyle: "preserve-3d", // allows 3D transforms
                        transition: "transform 0.68s ease", // makes transforms animate smoothly
                        transform: isFlipping ? "rotateY(-180deg)" : "rotateY(0deg)",
                        overflow: "hidden",

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

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                        }}
                    >
                    </div>
                </div>
            </div>
        </div >
    );
}