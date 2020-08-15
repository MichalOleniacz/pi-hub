import axios from "axios";
import * as actions from "../api";

export const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const {
    url,
    method,
    headers,
    email,
    data,
    onStart,
    onSuccess,
    onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  const params = new URLSearchParams();
  params.append("email", email);

  try {
    const response = await axios.request({
      url,
      parmas: params,
      headers,
      method,
      data,
    });

    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
