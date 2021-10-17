import React, { Fragment, useState } from 'react';
import Error from './Error'
import PropTypes from "prop-types";

const Question = ({ setBudget, setRest, setShowQuestion }) => {

  const [initialBudget, setInitialBudget] = useState(0);
  const [error, setError] = useState(false);

  const handleChangeBugget = (e) => {
    setInitialBudget(parseInt(e.target.value, 10));
  }

  const onSubmitBudget = (e) => {
    e.preventDefault();

    if(isNaN(initialBudget) || (initialBudget < 1)) {
      setError(true);
      return;
    }

    setError(false);
    setBudget(initialBudget);
    setRest(initialBudget);
    setShowQuestion(false);
  }

  return (
    <Fragment>
      <h2>
        Coloca tu presupuesto
      </h2>
      { error ? <Error message="El presupuesto es incorrecto" /> : null }
      <form onSubmit={onSubmitBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChangeBugget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRest: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
}

export default Question;
