import React from 'react'

const Child1 = ({set}:any) => {
  return (
    <div>
        <button className='bg-black p-3 rounded-md text-white' onClick={()=>{set((pre:number)=>{ return pre+1000 })}}>
        +1000
        </button> </div>
  )
}

export default Child1