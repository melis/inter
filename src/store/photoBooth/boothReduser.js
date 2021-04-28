import { booths } from "../data";

const initialState = {
  booths,
};

const boothReduser = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return { ...state };

    default:
      return state;
  }
};

export default boothReduser;
