import { DELETE_JOKE, FETCH_NEW_JOKES } from '../action/types';

const initialState = {
  jokesList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEW_JOKES:
      return { ...state, 
        jokesList: limitJokesToTen(action.payload) 
      }
    case DELETE_JOKE:
      return {
        ...state, 
        jokesList: deleteSingleJoke(state, action.payload)
      };
    default:
      return state;
  }
}

function limitJokesToTen(payload) {
  let arr = []
  // this loop ensures that all the random numbers are unique
  while (arr.length < 10) {
    let r = Math.floor(Math.random() * payload.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr.map(x => payload[x])
}

function deleteSingleJoke(state, payload) {
  return [...state.jokesList].filter(joke => joke.id !== payload)
}

