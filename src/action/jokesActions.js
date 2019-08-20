import { FETCH_NEW_JOKES, DELETE_JOKE } from './types';

export const fetchJokes = () => dispatch => {
  fetch('http://api.icndb.com/jokes')
    .then(res => res.json())
    .then(jokes => {
      if (jokes.type !== 'success') {
        return null
      } else {
        dispatch({
          type: FETCH_NEW_JOKES,
          payload: jokes.value
        });
      }
    });
}

export const deleteJoke = jokeID => dispatch => {
  dispatch({
    type: DELETE_JOKE,
    payload: jokeID
  });
}
