import React, { useState } from "react";
import "./App.css"; // Import custom CSS

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <div>one!</div>;
      case 1:
        return <div>two!</div>;
      case 2:
        return <div>three!</div>;
      default:
        return null;
    }
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => setActiveTab(0)}
        >
          One
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          Two
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          Three
        </div>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default App;
