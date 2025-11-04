import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
         <header className=" bg-linear-65 from-cyan-500/90 to-pink-400/90 ">
              <nav className="container mx-auto flex item-center justify-between p-4 font-bold ">
                <div className="font-bold text-white text-2xl">KDT React</div>
                <ul className="flex space-x-4 text-white text-xl ">
                  <Link to="/" className="cursor-pointer hover:scale-130 transition-all  duration-200 ease-in-out">홈</Link>
                  <Link to="/Lotto" className="cursor-pointer hover:scale-130 transition-all  duration-200 ease-in-out">로또</Link>
                  <Link to="/BoxOffice" className="cursor-pointer hover:scale-130 transition-all  duration-200 ease-in-out">박스오피스</Link>
                  <Link to="/Traffic" className="cursor-pointer hover:scale-130 transition-all  duration-200 ease-in-out">교통사고</Link>
                  <Link to="/Gallery" className="cursor-pointer hover:scale-130 transition-all  duration-200 ease-in-out">갤러리</Link>
                  <Link to="/Festival" className="cursor-pointer hover:scale-130 transition-all  duration-200 ease-in-out">축제</Link>
                  <Link to="/Charge" className="cursor-pointer hover:scale-130 transition-all  duration-200 ease-in-out">충전소정보</Link>
                </ul>
              </nav>
            </header> 
  )
}
