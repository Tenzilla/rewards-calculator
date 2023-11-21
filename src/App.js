import React from 'react';
import './App.css';
import RewardsCalculator from './components/RewardsCalculator';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <RewardsCalculator />
      </TransactionProvider>
    </div>
  );
}

export default App;
