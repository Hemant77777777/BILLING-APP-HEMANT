import { ADD_BILL, EDIT_BILL, DELETE_BILL, SET_FILTER } from '../actions/billActions';

const initialState = {
  bills: [],
  filter: 'All',
};

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      return { ...state, bills: [...state.bills, action.payload] };
      case EDIT_BILL:
        return {
          ...state,
          bills: state.bills.map((bill) =>
            bill.id === action.payload.id ? { ...bill, ...action.payload.updatedBill } : bill
          ),
        };
      
    case DELETE_BILL:
      return { ...state, bills: state.bills.filter((bill) => bill.id !== action.payload) };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default billReducer;
