import React from 'react';
import PropTypes from 'prop-types';

export default function SingleJoke({ deleteJoke, joke }) {
  return (
    <li className='joke-li' onClick={() => deleteJoke(joke)}>
      {joke.joke}
    </li>
  )
}

SingleJoke.propTypes = {
  joke: PropTypes.object.isRequired,
  deleteJoke: PropTypes.func.isRequired,
};


