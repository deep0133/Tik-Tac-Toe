import React from 'react'
import PlayBox from './PlayBox'

export default function Home({result,setResult}) {
  return (
    <div className='body bg-[#192a32] h-screen w-full border-2 border-white flex justify-center items-center text-white'>
      <PlayBox result={result} setResult={setResult} />
    </div>
  )
}
