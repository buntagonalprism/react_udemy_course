import { useState } from "react"

import Header from "./components/Header"
import ResultTable from "./components/ResultTable"
import UserInput from "./components/UserInput"

const initialInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {

  const [userInput, setUserInput] = useState(initialInput);

  function handleInputUpdated(field, newValue) {
    let newValueAsNum = parseInt(newValue) || 0;
    if (newValueAsNum < 0) {
      newValueAsNum = 0;
    }
    setUserInput(prevInput => ({
      ...prevInput,
      [field]: newValueAsNum
    }));
  }

  return (<>
    <Header />
    <UserInput userInput={userInput} onInputUpdated={handleInputUpdated} />
    <ResultTable userInput={userInput} />
  </>)
}

export default App
