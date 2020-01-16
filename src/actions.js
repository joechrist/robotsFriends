import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
//All action here!
/**
 * setSearchField => action name
 * text => user entries
 * action setSearchField return an object
 */
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// All action requests
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .then((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
