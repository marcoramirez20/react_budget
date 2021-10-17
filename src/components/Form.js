import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from "prop-types";

const Form = ({ setExpense, setAllowAddExpense }) => {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();

    if(amount < 1 || isNaN(amount) || name.trim() === ''){
      setError(true);
      return;
    }
    setError(false);
    const expense = {
      name,
      amount,
      id: shortid.generate()
    }
    setExpense(expense);
    setAllowAddExpense(true);
    setName('');
    setAmount(0);
  }

  return(
    <form onSubmit={addExpense}>
      <h2>
        Agrega tus gastos aquí
      </h2>
      { error ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null }
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={amount}
          onChange={e => setAmount(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setAllowAddExpense: PropTypes.func.isRequired
}

export default Form;
