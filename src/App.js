import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [allowAddExpense, setAllowAddExpense] = useState(false);

  useEffect(() => {
    if(allowAddExpense) {
      setExpenses([...expenses, expense]);
      setRest(rest - expense.amount);
      setAllowAddExpense(false);
    }
  }, [expense, allowAddExpense, expenses, rest]);

  return (
    <div className="container">
      <header>
        <h1>
          Gasto Semanal
        </h1>

        <div className="contenido-principal contenido">
          { showQuestion ?
            (
              <Question
                setBudget={setBudget}
                setRest={setRest}
                setShowQuestion={setShowQuestion}
              />
            )
            :
            (
              <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                    setAllowAddExpense={setAllowAddExpense}
                  />
                </div>
                <div className="one-half column">
                  <List expenses={expenses} />
                  <BudgetControl
                    budget={budget}
                    rest={rest}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
