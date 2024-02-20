import './App.css'
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/button'
import Screen from './components/input'
import ButtonClear from './components/button-clear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('')

  const addInput = (value) => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Add an input first')
    }
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freecodecamp-logo'
        />
      </div>
      <div className='container-calculator'>
        <Screen input={input} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  )
}

export default App
