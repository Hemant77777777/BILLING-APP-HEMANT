import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBill, editBill } from '../redux/actions/billActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const BillList = () => {
  const { bills, filter } = useSelector((state) => state.bill);
  const dispatch = useDispatch();
  const [editableBill, setEditableBill] = useState(null);
  const [editFormData, setEditFormData] = useState({ id:'',description: '', category: '', amount: '', date: '' });

  const filteredBills =
    filter === 'All' ? bills : bills.filter((bill) => bill.category === filter);

  const handleEdit = (bill) => {
    setEditableBill(bill.id);
    setEditFormData(bill);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
  
    // Create a new object to ensure immutability
    const updatedBill = { ...editFormData };
  
    // Dispatch the action with the updated bill data
    dispatch(editBill(editableBill, updatedBill));
  
    // Clear the editable state
    setEditableBill(null);
  };

  
  
  

  return (
    <div className="space-y-4 mt-6">
      <ul className="bill-list">
        {filteredBills.map((bill) => (
          <li key={bill.id}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            {editableBill === bill.id ? (
              <form onSubmit={handleEditSubmit} className="edit-form">
                <input
                  type="text"
                  value={editFormData.description}
                  onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                  required
                />
                <input
                  type="text"
                  list="categories"
                  value={editFormData.category}
                  onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                  required
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
                  value={editFormData.amount}
                  onChange={(e) => setEditFormData({ ...editFormData, amount: e.target.value })}
                  required
                />
                <input
                  type="date"
                  value={editFormData.date}
                  onChange={(e) => setEditFormData({ ...editFormData, date: e.target.value })}
                  required
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
            <p className="font-semibold text-lg">{bill.description}</p>
            <p className="text-sm text-gray-600">
              {bill.category} - ${bill.amount} - {bill.date}
            </p>
          </div>
            )}
            <button onClick={() => handleEdit(bill)}
             className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white focus:ring-2 focus:ring-blue-300"
            >
              <FontAwesomeIcon icon={faEdit} />

            </button>
            <button
              onClick={() => dispatch(deleteBill(bill.id))}
              className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white focus:ring-2 focus:ring-red-300"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
