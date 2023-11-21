// Mock data for transactions
const transactions = [
    { id: 1, customerId: 'C1', amount: 120, date: '2023-11-01' },
    { id: 2, customerId: 'C2', amount: 80, date: '2023-11-02' },
    // Add more sample transactions here
];

// Function to simulate an API call
export const fetchTransactions = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(transactions);
        }, 1000);
        // This simulates network delay
    });
};
