import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as CounterActions from '../actions';
import Counter from '../components/Counter';

const App = ({ counter, increment, decrement, children }) => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <Counter
      value={counter}
      onIncrement={increment}
      onDecrement={decrement}
    />
    <hr />
    {children}
    <webview id="foo" src="https://www.yahoo.co.jp/" />
  </div>
);

App.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
