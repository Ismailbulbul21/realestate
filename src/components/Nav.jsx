import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='h-[80px] bg-slate-500 flex justify-between gap-12 px-12 items-center font-bold text-yellow-50 text-[18px]      '>
        
<div className=' max-sm:hidden text-2xl max-md:hidden'>

OnlineReal<span className=' text-red-400'>Estate</span>

</div>


<div className='flex gap-12'>
<Link to="/">Home</Link>
<Link to="Contact">Contact</Link>
<Link to="About">About</Link>


</div>

    </div>
  )
}
