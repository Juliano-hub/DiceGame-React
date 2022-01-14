import React, {useState, useEffect} from 'react'
import Dice from './components/Dice'
import './App.css'

let FreezeVector = [false, false, false, false, false, false]

function App() {
  let [NumbersVector, setNumbersVector] = useState(() => {
    const initialState = [0, 0, 0, 0, 0, 0]
    return initialState.map((Number) => GenerateRandomNumber())
  })

  useEffect(() => {
  
    if(NumbersVector.every((val, ind, arr) => val === arr[0]) === true){
      window.alert('Você venceu!!! O jogo vai ser reiniciado!')
      window.location.reload();
    }
  
  })

  function Roll(){
    //console.log('Antes de tudo:', FreezeVector)

    setNumbersVector( NumbersVector.map((Number, i) =>{
      if(FreezeVector[i] !== true)
        return GenerateRandomNumber()
      return Number
    }))
    
    //console.log('Vetor dentro do roll:', NumbersVector)
  }

  function GenerateRandomNumber(){
    let min = Math.ceil(0);
    let max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    return (
        <div className ='GameArea'>
          <div className = 'Centering'> 
            <h1>Dice Game</h1>
            <p>Tenha todos os dados com o mesmo valor para ganhar!</p>
            <p>Aperte em um dado para manter seu valor durante a próxima rolagem.</p>
            <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[0]} DiceID = '0' />
            <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[1]} DiceID = '1' />
            <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[2]} DiceID = '2' /> <br/>
            <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[3]} DiceID = '3' />
            <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[4]} DiceID = '4' />
            <Dice CurrentFreeze = {FreezeVector}  CurrentNumber = {NumbersVector[5]} DiceID = '5' /> <br/>
            <button className = 'RollButton' onClick={() => Roll()}>Rodar dados não marcados</button>
          </div>
        </div>
    )
}

export default App;
