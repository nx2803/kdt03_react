import React from 'react'
import FoodCard from './FoodCard'
import fooddata from './fooddata.json'
import { useState } from 'react';
import TailButton from '../components/TailButton'

const category = [
  '전체',
  ...new Set(fooddata.map(item => item["운영주체 분류"].replaceAll(' ', '')))
];
  

export default function FoodMain() {

  const [selectedCategory, setSelectedCategory] = useState('전체');


  const handleFilterClick = (categoryValue) => {
    setSelectedCategory(categoryValue);
  };

  const filteredData = fooddata.filter(item => {

    if (selectedCategory === '전체') {
      return true;
    }
    return item["운영주체 분류"].replaceAll(' ', '') === selectedCategory;
  });

  const foodCards = filteredData.map((item, index) =>
    <FoodCard
      title={item.사업장명}
      juche={item.운영주체명}
      location={item['사업장 소재지']}
      gub={item.구분}
      phone={item['연락처(대표번호)']}
      fax={item.팩스번호}
      key={index}
    />
  );
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full  flex flex-row justify-center items-center p-5 mx-5 pb-8 gap-5'>
        {category.map((category, index) => (
          <TailButton color= {selectedCategory === category ? "cyan" : "white"} caption={category} onClick={() => handleFilterClick(category)}  />
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' >

        {foodCards}
      </div>
    </div>

  )
}
