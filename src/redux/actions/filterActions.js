import { ActionTypes } from "../constants/action-types";

const filterData = (data) => {
  const { FILTER_DATA } = ActionTypes;
  return {
    type: FILTER_DATA,
    payload: data,
  };
};

export default filterData;
