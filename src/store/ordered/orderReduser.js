const orderReduser = (state = null, action) => {
  switch (action.type) {
    case "ORDER":
      return action.order;

    default:
      return state;
  }
};

export default orderReduser;
