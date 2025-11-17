import React from 'react'
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/client';
import { useAtomValue } from 'jotai';
import { sessionAtom } from '../AtomAuth';
export default function Header() {
  const session = useAtomValue(sessionAtom);
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  if (!session) {
    return (
      <header className="">
        <nav className="container mx-auto flex items-center justify-between p-4 font-bold ">
          <Link to="/" className="font-bold cursor-pointer text-2xl text-transparent bg-clip-text  bg-linear-65 from-cyan-300 to-pink-400">KDT React</Link>
          <ul className="flex space-x-4 text-xl text-neutral-100">
          </ul>
        </nav>
        <div className="h-0.5 bg-linear-65 from-cyan-300 to-pink-400" />
      </header>
    )
  }
  else {
    return (
      <header className="">
        <nav className="container mx-auto flex items-center justify-between p-4 font-bold ">
          <Link to="/" className="font-bold cursor-pointer text-2xl text-transparent bg-clip-text  bg-linear-65 from-cyan-300 to-pink-400">KDT React</Link>
          <ul className="flex space-x-4 text-xl text-neutral-100">


            
            <Link to="/Clock" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">시계</Link>
            <Link to="/Lotto" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">로또</Link>
            <Link to="/BoxOffice" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">박스오피스</Link>
            <Link to="/Traffic" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">교통사고</Link>
            <Link to="/Gallery" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">갤러리</Link>
            <Link to="/Festival" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">축제</Link>
            <Link to="/Charge" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">충전소정보</Link>
            <Link to="/ToDoList" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">Todo</Link>
            <Link to="/Subway" className="cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out">Subway</Link>
            <button
              onClick={signOut} // 버튼 클릭 시 로그아웃 함수 호출
              className=" cursor-pointer hover:scale-120 transition-all  duration-200 ease-in-out text-white rounded hover:text-red-500"
            >
              로그아웃
            </button>
          </ul>
        </nav>
        <div className="h-0.5 bg-linear-65 from-cyan-300 to-pink-400" />
      </header>
    )
  }

}
