import React from 'react'

function Header() {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4">
      <div className="text-3xl text-gray-100">
        BlogHero
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 shadow-md">
        GetPremium
      </button>
    </header>
  )
}

export default Header
