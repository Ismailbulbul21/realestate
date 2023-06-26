import React, { useState } from 'react'
import img1 from '../sawiro/pexels-binyamin-mellish-1396132.jpg'
import img2 from '../sawiro/pexels-pixabay-259588.jpg'
import img3 from '../sawiro/pexels-luis-yanez-206172.jpg'
import img4 from '../sawiro/pexels-photo-106399.jpeg'
import img5 from '../sawiro/pexels-pixabay-164558.jpg'
import img6 from '../sawiro/pexels-pixabay-53610.jpg'

export const Home = () => {

const[show , setShow]=useState("");






  return (
    <div className='h-[190vh] w-full flex flex-col  py-24 tems-center px-12 '>
 



<div className=' flex px-7 mb-12  bg-slate-200   '>
 
<div className=' tracking-wider text-2xl font-thin '>

<h1 className=' text-4xl uppercase mb-5'>Welcome to our real <span className=' text-red-400'>estate website!</span> 

</h1>


<p className='tracking-widest mb-9 '>We are excited to have you here and showcase our extensive collection of properties. Whether you're looking to buy, sell, or rent, our team of experienced professionals is here to guide you every step of the way.

</p>
<p className='tracking-widest mb-14'>Our website is designed to provide you with a user-friendly experience, allowing you to easily search for properties that meet your specific needs and preferences. We offer a wide range of properties, from cozy apartments to stunning luxury homes, in various locations and price ranges.</p>
<p>Thank you for choosing our website as your go-to resource for all your real estate needs. We look forward to working with you and helping you find your dream property.</p>

</div>








   </div>



<div className='max-w-[1000px] h-full w-full flex flex-col  mx-auto    '>



<div>
<p className='text-4xl inline border-b-4 border-yellow-600 font-bold'>Houses</p>
<p className='py-3'>these are the houses we offerd  </p>



</div>

<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-12 text-center items-end  py-8'>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img src={img1} className="" />
<p className='mb-3 font-serif text-2xl'>Cost:$4,000</p>
<p className='mb-2 font-bold'>Location: Spain , Madrid</p>
<button className='bg-red-700 p-2 rounded-full mb-2 '><a href='about'>More info</a></button>

</div>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img src={img2} className="" />
<p className='mb-3 font-serif text-2xl'>Cost:$7,000</p>
<p className='mb-2 font-bold'>Location:USA ,Chicago</p>
<button className='bg-red-700 p-2 rounded-full mb-2'><a href='about'>More info</a></button>

</div>
<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img src={img3} className="" />
<p className='mb-3 font-serif text-2xl'>Cost:$20,000</p>
<p className='mb-2 font-bold'>Location:France , Paris </p>
<button className='bg-red-700 p-2 rounded-full mb-2'><a href='about'>More info</a></button>

</div>
<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img src={img4} className="" />
<p className='mb-3 font-serif text-2xl'>Cost:$8,000</p>
<p className='mb-2 font-bold'>Location:England , London</p>
<button className='bg-red-700 p-2 rounded-full mb-2'><a href='about'>More info</a></button>

</div>
<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img src={img5} className="" />
<p className='mb-3 font-serif text-2xl'>Cost:$23,000</p>
<p className='mb-2 font-bold'>Location:Somalia , Hargeisa</p>
<button className='bg-red-700 p-2 rounded-full mb-2'><a href='about'>More info</a></button>

</div>
<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img src={img6} className="" />
<p className='mb-3 font-serif text-2xl'>Cost:$1000</p>
<p className='mb-2 font-bold'>Location:Somalia ,Mogadishu</p>
<button className='bg-red-700 p-2 rounded-full mb-2'><a href='about'>More info</a></button>

</div>






</div>







</div>





    </div>
  )
}
