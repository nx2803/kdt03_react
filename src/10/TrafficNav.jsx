import React from 'react'
import TailButton from '../components/TailButton'

export default function TrafficNav({ title, category, selectC, setSelC }) {
  const handleButtonClick = (item) => {
        if (setSelC) {
            if (item === selectC) {
                setSelC(null); 
            } else {
                setSelC(item); 
            }
        }
    };
  return (
    <div className='flex flex-row w-full h-24 justify-between items-center p-2 px-20'>

      <div className='text-4xl font-bold'>
        교통사고 {title}
      </div>
      <div className='flex flex-row gap-4 '>
        
          {category && category.map(item => <TailButton key={item} color={item === selectC ? 'red' : 'white'} caption={item} onClick={()=>handleButtonClick(item)} />)}
          
        
      </div>
    </div>
  )
}
