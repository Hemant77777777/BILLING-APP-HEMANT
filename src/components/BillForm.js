import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBill } from '../redux/actions/billActions';

const BillForm = () => {
  const [formData, setFormData] = useState({ description: '', category: '', amount: '', date: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBill({ ...formData, id: Date.now() }));
    setFormData({ name: '', id: '', description: '', category: '', amount: '', date: '' });
  };

  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Unique ID"
        value={formData.id}
        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        required
        className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
         className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Category"
        list="categories"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
         className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <datalist id="categories">
        <option value="Food & Dining" />
        <option value="Utility" />
        <option value="Shopping" />
        <option value="Education" />
        <option value="Personal Care" />
        <option value="Travel" />
      </datalist>
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
         className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
        className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Add Bill
      </button>
    </form>
  );
};

export default BillForm;