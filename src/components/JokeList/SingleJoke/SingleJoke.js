import React from 'react';
import PropTypes from 'prop-types';

export default function SingleJoke({deleteJokeClick, joke }) {
  return (
    <li className='joke-li' onClick={deleteJokeClick}>
      {joke.joke}
    </li>
  )
}

SingleJoke.propTypes = {
  joke: PropTypes.object.isRequired,
  deleteJokeClick: PropTypes.func.isRequired,
};


