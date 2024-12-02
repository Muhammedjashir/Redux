import React from 'react'
import { useSelector } from 'react-redux'

function Test() {
    const {color}=useSelector((state)=>state.Value)
  return (
    <div >

        <div
        style={{
            height:"50px",
            width:"50px",
            backgroundColor:color
        }}>



    


        </div>

      

    </div>
  )
}

export default Test
