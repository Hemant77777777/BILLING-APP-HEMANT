import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';

const ChartComponent = () => {
  const { bills } = useSelector((state) => state.bill);
  const data = bills.map((bill) => ({ date: bill.date, amount: parseFloat(bill.amount) }));

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );
};

export default ChartComponent;