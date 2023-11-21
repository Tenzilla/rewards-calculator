import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { calculateRewards } from '../utils/calculateRewards';

const RewardsCalculator = () => {
    const { transactions, loading, error } = useContext(TransactionContext);
    const [filter, setFilter] = useState('');
    const [sortKey, setSortKey] = useState('date');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const filteredTransactions = transactions
        .filter(tx =>
            tx.customerId.includes(filter) || tx.amount.toString().includes(filter)
        )
        .sort((a, b) => {
            if (sortKey === 'amount') {
                return b.amount - a.amount;
            }
            return new Date(b.date) - new Date(a.date);
        });

    return (
        <div>
            <h2>Rewards Points Calculator</h2>
            <input
                type="text"
                aria-label="Filter Transactions"
                placeholder="Filter by Customer ID or Amount"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <select aria-label="Sort Transactions" onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
                <option value="date">Sort by Date</option>
                <option value="amount">Sort by Amount</option>
            </select>
            {filteredTransactions.map(tx => (
                <div key={tx.id}>
                    <p>
                        Customer {tx.customerId}: ${tx.amount} -
                        <strong>{calculateRewards(tx.amount)} points</strong>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default RewardsCalculator;
