
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeContracts } from './utils/storageUtils';

// Initialize contracts from preloaded data or load from localStorage as fallback
if (window.PRELOADED_CONTRACTS) {
  // Initialize from preloaded data (for standalone HTML)
  initializeContracts(JSON.stringify(window.PRELOADED_CONTRACTS));
} else {
  // Try to load from localStorage as fallback for backward compatibility
  const storedContracts = localStorage.getItem('contracts');
  if (storedContracts) {
    initializeContracts(storedContracts);
  } else {
    initializeContracts();
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
