// import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_SACK_DATA':
      return action.sackData;
    default:
      return state;
  }
};
export default reducer;
