import React, {useState} from 'react'
import '../App.css'


const Dice = (props) =>{
    let [ColorButton, setColorButton] = useState('DiceShape')

    function FreezeDice(e){
        
        e.preventDefault();
        if(ColorButton === 'DiceShape'){
            setColorButton('DiceShapeBlue')
        }else{
            setColorButton('DiceShape')
        }

        if(props.CurrentFreeze[props.DiceID] === false){
            props.CurrentFreeze[props.DiceID] = true
        }else{
            props.CurrentFreeze[props.DiceID] = false
        }

    }

    return(
        <button className = {ColorButton} onClick ={(e) => FreezeDice(e)}>
            {props.CurrentNumber}
        </button>
    )
}

export default Dice