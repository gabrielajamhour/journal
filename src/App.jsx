import { useState } from "react";

import JournalPage from "./components/JournalPage";
import { journalEntries } from "./data/journalEntries";

export default function App() {
  // currentPage = index of the entry on the LEFT page.
  // The right page always shows journalEntries[currentPage + 1].
  const [currentPage, setCurrentPage] = useState(0);

  // flippingPage is null when nothing is animating.
  // While a flip is in progress, it holds the index of the entry
  // that is physically rotating off the right page.
  const [flippingPage, setFlippingPage] = useState(null);

  const goNext = () => {
    if (flippingPage !== null) return; // ignore clicks mid-animation
    if (currentPage >= journalEntries.length - 2) return; // no right page to flip

    // The page currently sitting on the right is the one that turns.
    setFlippingPage(currentPage + 1);
  };

  const goPrevious = () => {
    if (flippingPage !== null) return;
    if (currentPage === 0) return;

    // Simple, non-animated jump for now. See JournalPage/FlippingPage
    // for the pattern to mirror if you want an animated version later.
    setCurrentPage((prev) => prev - 1);
  };

  // Called by the overlay once its CSS transition has actually finished.
  // This is what "commits" the page turn — content and animation state
  // change together, in one place, only when the animation is really done.
  const handleFlipEnd = () => {
    setCurrentPage((prev) => prev + 1);
    setFlippingPage(null);
  };

  const isFlipping = flippingPage !== null;

  const leftEntry = journalEntries[currentPage];

  // While flipping, the page underneath is already the DESTINATION page.
  // It's hidden behind the overlay until the overlay rotates past ~90deg.
  const rightEntry = journalEntries[isFlipping ? currentPage + 2 : currentPage + 1];

  const flippingEntry = isFlipping ? journalEntries[flippingPage] : null;

  return (
    <div>
      <JournalPage
        leftEntry={leftEntry}
        rightEntry={rightEntry}
        flippingEntry={flippingEntry}
        flippingKey={flippingPage}
        onFlipEnd={handleFlipEnd}
      />

      <div style={{ display: "flex", gap: "10px", padding: "20px 40px" }}>
        <button onClick={goPrevious} disabled={currentPage === 0 || isFlipping}>
          ← Previous
        </button>

        <button
          onClick={goNext}
          disabled={currentPage >= journalEntries.length - 2 || isFlipping}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
