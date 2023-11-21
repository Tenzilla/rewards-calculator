import React, { createContext, useState, useEffect } from 'react';
import { fetchTransactions } from '../api/api';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTransactions()
            .then(data => {
                setTransactions(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return (
        <TransactionContext.Provider value={{ transactions, loading, error }}>
            {children}
        </TransactionContext.Provider>
    );
};
