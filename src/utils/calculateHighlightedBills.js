export const calculateHighlightedBills = (bills, budget) => {
    let remainingBudget = budget;
    return bills
      .sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount))
      .filter((bill) => {
        if (remainingBudget - parseFloat(bill.amount) >= 0) {
          remainingBudget -= parseFloat(bill.amount);
          return true;
        }
        return false;
      });
  };