import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="">
      <nav className="container mx-auto flex item-center justify-between p-4 font-bold ">
        <div className="font-bold  text-2xl text-transparent bg-clip-text  bg-linear-65 from-cyan-300 to-pink-400">KDT React</div>
        <ul className="flex space-x-4 text-xl text-white">
          <Link to="/" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">홈</Link>
          <Link to="/Lotto" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">로또</Link>
          <Link to="/BoxOffice" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">박스오피스</Link>
          <Link to="/Traffic" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">교통사고</Link>
          <Link to="/Gallery" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">갤러리</Link>
          <Link to="/Festival" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">축제</Link>
          <Link to="/Charge" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">충전소정보</Link>
          <Link to="/ToDoList" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">Todo</Link>
        </ul>
      </nav>
      <div className="h-0.5 bg-linear-65 from-cyan-300 to-pink-400"/>
    </header>
  )
}
