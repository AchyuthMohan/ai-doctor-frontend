import React from 'react'
import { useEffect } from 'react'

const TestComponnet = () => {
    useEffect(()=>{
        console.log("test")
    },[])
  return (
    <div>TestComponnet</div>
  )
}

export default TestComponnet