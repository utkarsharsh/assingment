import React from 'react'

const Child2 = ({set}:any) => {
  return (
    <div>
        <div><button className='bg-black p-3 rounded-md text-white' onClick={()=>{set((pre:number)=>{ return pre-500 })}}>
        -500

        </button></div>
    </div>
  )
}

export default Child2