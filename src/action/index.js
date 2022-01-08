import JsonPlaceHolder from "../Api/JsonPlaceHolder";
import _ from "lodash";

export const fetchtodo = () => async (dispatch) => {
  const response = await JsonPlaceHolder.get("/todos", {
    params: {
      _limit: 100,
    },
  });

  dispatch({ type: "FETCH_TODO", payload: response.data });
};

export const fetchUser = (uid) => async (dispatch) => {
  const response = await JsonPlaceHolder.get(`/users/${uid}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchtodowithuser = () => async (dispatch, getState) => {
  await dispatch(fetchtodo());
  console.log(_.map(getState().todolist, "userId"));
  _.chain(getState().todolist)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
