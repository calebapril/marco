import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  return (
    <Link href="" className='flex items-center gap-4'>
      <div className="relative md:w-5 md:h-5">
        <FaSearch size={20}/>
      </div>
    </Link>
  )
}

export default SearchBar