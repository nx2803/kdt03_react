import React from 'react'

export default function Header() {
  return (
         <header className="border-b-3 border-dashed border-white">
              <nav className="container mx-auto flex item-center justify-between p-4">
                <div className="font-bold text-white text-2xl">KDT React</div>
                <ul className="flex space-x-4 text-white text-xl ">
                  <li className="hover:text-gray-300">홈</li>
                  <li className="hover:text-gray-300">로또</li>
                </ul>
              </nav>
            </header> 
  )
}
