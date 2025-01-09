import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon() {
  return (
    <Link href="" className='flex items-center gap-4'>
      <div className="relative md:w-5 md:h-5">
        <FaShoppingCart size={20}/>
      </div>
    </Link>
  );
};

export default CartIcon

