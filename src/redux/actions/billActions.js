export const ADD_BILL = 'ADD_BILL';
export const EDIT_BILL = 'EDIT_BILL';
export const DELETE_BILL = 'DELETE_BILL';
export const SET_FILTER = 'SET_FILTER';

export const addBill = (bill) => ({ type: ADD_BILL, payload: bill });
export const editBill = (id, updatedBill) => ({ type: EDIT_BILL, payload: { id, updatedBill } });
export const deleteBill = (id) => ({ type: DELETE_BILL, payload: id });
export const setFilter = (category) => ({ type: SET_FILTER, payload: category });