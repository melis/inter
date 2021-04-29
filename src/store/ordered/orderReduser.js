const initialState = {
  order: null,
};

const orderReduser = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER":
      return action.order;

    default:
      return state;
  }
};

export default orderReduser;
