import React from 'react'
import colorNames from 'colornames';

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Add Color Name:</label>
        <input autoFocus
        type='text'
        placeholder='add color name'
        required
        onChange={(e)=>{
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}/>
        <button type='button'
        onClick={()=>setIsDarkText(!isDarkText)}>
           Toggle color text 
        </button>
    </form>
  )
}

export default Input