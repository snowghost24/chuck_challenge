import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJokes } from '../redux/action/jokesActions';

const FetchJokesButton = props => (
  <Fragment>
    <button className='btn btn-dark' onClick={() => props.fetchJokes()}>Get New Jokes</button>
  </Fragment>
)


FetchJokesButton.propTypes = {
  fetchJokes: PropTypes.func.isRequired
};

export default connect(null, { fetchJokes })(FetchJokesButton);

