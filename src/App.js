import React from 'react';
import BillForm from './components/BillForm';
import BillList from './components/BillList';
import Filter from './components/Filter';
import ChartComponent from './components/ChartComponent';
import HighlightedBills from './components/HighlightedBills';

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10">
    <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Bill Manager</h1>
    <BillForm />
    <Filter />
    <BillList />
    <ChartComponent />
    <HighlightedBills />
  </div>
);

export default App;