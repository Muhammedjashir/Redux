import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Colors } from './Slice'
function Buttons() {
const Dispatch=useDispatch()


  return (
    <div> 


         <button onClick={()=>Dispatch(Colors("green"))}>green</button>
        <button onClick={()=>Dispatch(Colors("yellow"))}>yellow</button>
        <button onClick={()=>Dispatch(Colors("blue"))}>blue</button>
        <button onClick={()=>Dispatch(Colors("black"))}>black</button>
      
    </div>
  )
}

export default Buttons
