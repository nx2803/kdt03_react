import React from 'react'
import FoodCard from './FoodCard'
import fooddata from './fooddata.json'


import { useState } from 'react';
export default function FoodMain() {
  const [tags, setTags] = useState([]);
  const tags2 = fooddata.map((item, index) => <FoodCard title={item.사업장명} juche={item.운영주체명} location={item['사업장 소재지']} gub = {item.구분} phone={item['연락처(대표번호)']} fax={item.팩스번호} key={index}/>);
  const fdata = {
        "구분": "광역지원센터",
    "시군구": "부산시",
    "사업장명": "부산광역푸드뱅크",
    "신고기준": "당연",
    "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    "연락처(대표번호)": "051-791-1377",
    "팩스번호": "051-714-3096",
    "운영주체 분류": "1. 사회복지법인",
    "운영주체명": "부산광역시사회복지협의회"
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' >
     {tags2}
      
    </div>
  )
}
