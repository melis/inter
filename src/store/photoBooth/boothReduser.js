import { booths } from "../data";

const initialState = {
  booths,
};

const boothReduser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOTH":
      return { ...state, booths: [...state.booths, action.booths] };

    default:
      return state;
  }
};

export default boothReduser;
