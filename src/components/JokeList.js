import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteJoke } from '../redux/action/jokesActions';
import SingleJoke from '../components/SingleJoke';

class JokesList extends Component {
  deleteJokes = (deleteMe) => {
    this.props.deleteJoke(deleteMe.id)
  }

  render() {
    let jokeHeader = 'Press button to load Chuck Norris jokes';
    if (this.props.jokesList.length > 0) {
      jokeHeader = 'Chuck Norris Jokes List';
    }
    const listedJokes = this.props.jokesList.map(joke => <SingleJoke key={joke.id} joke={joke} deleteJoke={this.deleteJokes} />);
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
}

JokesList.propTypes = {
  jokesList: PropTypes.array.isRequired,
  deleteJoke: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  jokesList: state.jokes.jokesList
});

export default connect(mapStateToProps, { deleteJoke })(JokesList);