import React from 'react';
import { useSelector } from 'react-redux';
import { calculateHighlightedBills } from '../utils/calculateHighlightedBills';

const HighlightedBills = () => {
  const { bills } = useSelector((state) => state.bill);
  const budget = 50000; // Example budget
  const selectedBills = calculateHighlightedBills(bills, budget);

  return (
    <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
       <h2 className="text-2xl font-bold">Highlighted Bills (Minimum to Pay)</h2>
      <p className="mt-4">Total Budget: ${budget}</p>
      <ul className="mt-4 space-y-2">
        {selectedBills.map((bill) => (
          <li key={bill.id} className="text-lg">
            {bill.description} - ${bill.amount} ({bill.category})
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">
        Total Amount Paid: $
        {selectedBills.reduce((sum, bill) => sum + parseFloat(bill.amount), 0)}
      </p>
    </div>
  );
};

export default HighlightedBills;
