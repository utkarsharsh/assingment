"use client"
import React from 'react'
import { useState } from 'react'
import Child1 from '../child1/Child1'
import Child2 from '../child2/Child2'
const Parent = () => {
    const [money,setmoney]=useState<number>(1000)
  return (
    <div className='w-full h-screen flex justify-center items-center'>

     <div className=' flex flex-col gap-6 justify-center items-center w-[300px] rounded-lg bg-blue-400 p-3 h-[300px]'>
      <h1 className='text-white'> Money is : {money}</h1>
      <div className='flex gap-4'>
     <Child1 set={setmoney}/>
     <Child2 set={setmoney}/>
      </div>
     </div>


    </div>
  )
}

export default Parent