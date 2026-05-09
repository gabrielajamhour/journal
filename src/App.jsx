import { useState } from "react";
/* Usage: const [state, setState] = useState(initialState) */

import JournalPage from "./components/JournalPage";
import { journalEntries } from "./data/journalEntries";

export default function App() {

  // Create variables currentPage and setCurrentPage
  const [currentPage, setCurrentPage] = useState(0);

  // Create animation variables
  const [isAnimating, setIsAnimating] = useState(false);

  // Create flipping variables
  const [isFlipping, setIsFlipping] = useState(false);

  // Create changePage variable
  const changePage = (direction) => {
    if (isFlipping) return;

    setIsFlipping(true);
    
    setTimeout(() => {
      setCurrentPage((prev) => prev + direction);
    }, 300); // fake "page turn delay"

    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  return (
    <div
      style={{
        opacity: isAnimating ? 0 : 1,
        transition: "opacity 0.2 ease",
      }}
    >
      <JournalPage 
        entry={journalEntries[currentPage]}
        isFlipping={isFlipping}
      />

      <div style={{ display: "flex", gap: "10px", padding: "20px 40px" }}>
        <button
          onClick={() => changePage(-1)}
          disabled={currentPage === 0}
        >
          ← Previous
        </button>

        <button
          onClick={() => changePage(1)}
          disabled={currentPage === journalEntries.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}