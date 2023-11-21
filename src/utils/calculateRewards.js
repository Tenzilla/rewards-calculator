// This will be the utility function to calculate rewards based on transaction amount
export const calculateRewards = (amount) => {
    if (amount <= 50) return 0;
    const overHundred = amount > 100 ? (amount - 100) * 2 : 0;
    const fiftyToHundred = amount > 50 ? Math.min(amount, 100) - 50 : 0;
    return overHundred + fiftyToHundred;
};
