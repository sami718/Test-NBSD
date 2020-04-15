const list = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST':
      return action.data;
    default:
      return state;
  }
};

export default list;
