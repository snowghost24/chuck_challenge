import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteJoke } from '../../redux/action/jokesActions';
import SingleJoke from './SingleJoke/SingleJoke';

const JokesList = props => {
  const { deleteJoke, jokesList } = props
  let jokeHeader = 'Press button to load Chuck Norris jokes';
  if (jokesList.length > 0) {
    jokeHeader = 'Chuck Norris Jokes List';
  }
  const listedJokes = jokesList.map(joke => (
    <SingleJoke
      key={joke.id}
      joke={joke}
      deleteJokeClick={()=>deleteJoke(joke.id)} />
  ));

  return (
    <Fragment>
      <h3>
        {jokeHeader}
      </h3>
      <ul>
        {listedJokes}
      </ul>
    </Fragment>
  );
}

JokesList.propTypes = {
  jokesList: PropTypes.array.isRequired,
  deleteJoke: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ jokesList: state.jokes.jokesList });

export default connect(mapStateToProps, { deleteJoke })(JokesList);