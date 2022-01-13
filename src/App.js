import React, {useState} from 'react'
import Dice from './components/Dice'
import './App.css'

function App() {
  let [NumbersVector, setNumbersVector] = useState(() => {
    const initialState = [0, 0, 0, 0, 0, 0]
    return initialState.map((Number) => GenerateRandomNumber())
  })

  function Roll(){
    console.log('Antes de tudo:', FreezeVector)

    setNumbersVector( NumbersVector.map((Number) => GenerateRandomNumber()))
    
    console.log('Vetor dentro do roll:', NumbersVector)
  }

  function GenerateRandomNumber(){
    let min = Math.ceil(0);
    let max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let FreezeVector = [false, false, false, false, false, false]

    return (
      <body className ='ColorBackground'>
        <div padding = '20px'> 
          <h1>AAAA</h1>
          <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[0]} DiceID = {0} />
          <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[1]} DiceID = '1' />
          <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[2]} DiceID = '2' /> <br/>
          <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[3]} DiceID = '3' />
          <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[4]} DiceID = '4' />
          <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[5]} DiceID = '5' /> <br/>
          <button className = 'RollButton' onClick={() => Roll()}>Roll all unmarked dices</button>
        </div>
      </body>
    )
}

export default App;
