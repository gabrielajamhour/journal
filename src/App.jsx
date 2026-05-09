import { useState } from "react";
import JournalPage from "./components/JournalPage";
import { journalEntries } from "./data/journalEntries";

export default function App() {

  // Create variables currentPage and setCurrentPage
  const [currentPage, setCurrentPage] = useState(0);
  /* Usage: const [state, setState] = useState(initialState) */

  // Create variable nextPage
  const nextPage = () => {
    if (currentPage < journalEntries.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Create variable prevPage
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <JournalPage entry={journalEntries[currentPage]} />

      <div style={{ display: "flex", gap: "10px", padding: "20px 4px" }}>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
        >
          ← Previous
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === journalEntries.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}