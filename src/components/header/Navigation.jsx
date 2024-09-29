import React, { useState } from 'react'

export default function Navigation() {

    const [isOpenMenu, setIsOpenMenu] = useState(false);



    return (
        <>
            <nav className='  flex  items-center text-slate-400 bg-slate-900 md:container p-4 md:bg-transparent '>
                <div className='flex items-senter'>
                    <h1 className='text-2xl mr-10 shadow-inner '>mr,<span className='text-fuchsia-500 '> movies </span>
                        <p className='text-xs text-center text-teal-800  font-sans font-bold font-light'>Film review</p>

                    </h1>
                    <ul className=' text-base text-sm hidden md:flex gap-5 text-uppercase mt-auto'>
                        <li><a href="#">movies</a></li>
                        <li><a href="#">tv movies</a></li>
                        <li><a href="#">people</a></li>
                        <li><a href="#">more</a></li>

                    </ul>
                </div>
                <div className='hidden md:block ml-auto uppercase text-sm lg:text-base '>
                    <ul className='flex gap-8 '>
                        <li><a href="#" className='bg-lime-600 px-3 py-2 rounded-2xl text-uppercase text-white  hover:bg-red-400 '>login</a></li>
                        <li><a href="#" className='bg-green-700 px-3 py-2 rounded-2xl text-uppercase text-white hover:bg-red-400'>sign,up</a></li>
                    </ul>
                </div>
                <div className=' md:hidden ml-auto'>
                    <button onClick={()=>setIsOpenMenu (!isOpenMenu)} >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="44" height="80" fill="currentColor" className="bi bi-list"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"/>
                             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                </div>

            </nav>


            <div className={ `md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-400 text-slate-300 font-serif ${
                isOpenMenu
                ?"h-full py-4 border-t-2 border-slate-700" 
                :" py-0 h-0 border-none"}`}
                style={{height:isOpenMenu? 257: 0}} >





                <ul className='flex flex-col gap-4'> 
                    <li> <a href="#">movies </a></li>
                    <li> <a href="#">tv shadows </a></li>
                    <li> <a href="#">peple </a></li>
                    <li> <a href="#">more </a></li>

                </ul>
                <div className='mt-4 flex gap-4 justify-center  items-center border-t-2 pt-4 border-slate-700'>
                    
<a href="#" className='  bg-teal-600 rounded-xl py-2 px-5 text-white'>login</a>
<a href="#" className='bg-rose-600 rounded-xl py-2 px-4 text-white '>sign up</a>

                </div>
            </div>
        </>


    );
}
