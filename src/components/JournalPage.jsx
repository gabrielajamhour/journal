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
            {/*Book container*/}
            <div
                style={{
                    display: "flex",
                    width: "900px",
                    height: "600px",
                    perspective: "2000px",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
                    borderRadius: "6px",
                    overflow: "hidden",
                }}
            >
                {/*LEFT PAGE*/}
                <div
                    style={{
                        flex: 1,
                        background: "#f7f1e3",
                        padding: "40px",
                        borderRight: "1px solid rbga(0, 0, 0, 0.1)",

                        transformOrigin: "left center", // rotate like a real page attached at the spine
                        transformStyle: "preserve-3d", // allows 3D transforms
                        transition: "transform 0.6s ease", // makes transforms animate smoothly
                        transform: isFlipping ? "rotateY(-120deg)" : "rotateY(0deg)",

                        cursor: "pointer",
                    }}
                >
                    <h2 style={{ marginTop: 0 }}>{entry.title}</h2>
                    <p style={{ lineHeight: 1.6 }}>{entry.content}</p>
                </div>

                {/*RIGHT PAGE*/}
                <div
                    style={{
                        flex: 1,
                        background: "#fbf7ef",
                        padding: "40px",
                    }}
                >
                    <h3 style={{ marginTop: 0 }}>Notes</h3>
                    <p style={{ opacity: 0.7 }}>
                        This is the right page of the journal. You can later use this for
                        reflections, sketches, or secondary content.
                    </p>
                </div>
            </div>
        </div>
    );
}