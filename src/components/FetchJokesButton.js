import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJokes } from '../action/jokesActions';

class FetchJokesButton extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchJokes();
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <button className='btn btn-dark' type="submit">Get New Jokes</button>
        </form>
      </Fragment>
    );
  }
}

FetchJokesButton.propTypes = {
    fetchJokes: PropTypes.func.isRequired
};

export default connect(null, { fetchJokes })(FetchJokesButton);

