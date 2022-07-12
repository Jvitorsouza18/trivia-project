import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Question extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <>
        <span data-testid="question-category" className="card-title">{ question.category }</span>
        <p data-testid="question-text">{ question.question }</p>
      </>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object,
}.isRequired;

export default connect()(Question);
