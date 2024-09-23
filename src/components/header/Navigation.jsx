import React from 'react'

export default function Navigation() {
    return (
        <nav className=' flex  items-center text-slate-400 '>
            <div className='flex items-senter'>
                <h1 className='text-2xl mr-10 shadow-inner '>mr,<span className='text-fuchsia-500 '> movies </span>
                   <p className='text-xs text-center text-teal-800  font-sans font-bold font-light'>Film review</p>
                   
                    </h1>
                <ul className='flex gap-5 text-uppercase mt-auto'>
                    <li><a href="#">movies</a></li>
                    <li><a href="#">people</a></li>
                    <li><a href="#">more</a></li>



                </ul>
            </div>
            <div className='ml-auto '>
                <ul className='flex gap-8'>
                    <li><a href="#" className='bg-lime-600 px-3 py-2 rounded-2xl text-uppercase text-white  hover:bg-red-400 '>login</a></li>
                    <li><a href="#" className='bg-green-700 px-3 py-2 rounded-2xl text-uppercase text-white hover:bg-red-400'>sign,up</a></li>
                </ul>
            </div>
        </nav>
    )
}
