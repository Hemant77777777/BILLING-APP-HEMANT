import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/billActions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <select onChange={handleFilterChange} className="w-full p-3 mt-6 border border-gray-300 rounded focus:ring focus:ring-blue-300">
      <option value="All">All</option>
      <option value="Food & Dining">Food & Dining</option>
      <option value="Utility">Utility</option>
      <option value="Shopping">Shopping</option>
      <option value="Education">Education</option>
      <option value="Personal Care">Personal Care</option>
      <option value="Travel">Travel</option>
    </select>
  );
};

export default Filter;
