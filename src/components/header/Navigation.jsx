import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const menuItems = [
    {
        path: "/movies",
        text: "Movies",
    },
    {
        path: "/tv",
        text: "Tv Shows",
    },
    {
        path: "/people",
        text: "People",
    },
    {
        path: "/more",
        text: "More",
    },
];

export default function Navigation() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const {user,logout} = useContext(UserContext);


    function activeClass({ isActive }) {
        return isActive ? "text-yellow-600" : "hover:text-slate-400";
    }



    return (
        <>
            <nav className='  flex  items-center text-slate-400 bg-slate-900 md:container p-4 md:bg-transparent '>
                <div className='flex items-baseline'>
                    <Link to="./"> <h1 className='text-2xl mr-10 shadow-inner '>
                        mr,<span className='text-fuchsia-500 '>
                            movies </span>
                        <p className='text-xs text-center text-teal-800  font-sans font-bold font-light'>
                            Film review</p>
                    </h1></Link>
                    <ul className=' text-base text-sm hidden md:flex gap-5 text-uppercase '>

                        {menuItems.map(item => (

                            <li key={item.path}><NavLink to={item.path} className={activeClass}>{item.text}</NavLink></li>
                        ))}



                    </ul>
                </div>
                <div className='hidden md:block ml-auto uppercase text-sm  '>
                    {Object.keys(user).length ? (

<>
<div>{user.name}
    <span onClick={logout} className='text-red-700 ml-4 ' >logout</span>

</div>

</>
                    ) : ( 
                        <ul className='flex gap-8 '>
                            <li><NavLink to="/login" className='bg-lime-600  px-3.5 py-3 rounded-3xl text-uppercase  text-white  hover:bg-red-400 '>login</NavLink></li>
                            <li><NavLink to="/signup" className='bg-green-700 px-3 py-3 rounded-3xl text-uppercase text-white hover:bg-red-400'>Sign up</NavLink></li>
                        </ul>
                    )}
                </div>
                <div className=' md:hidden ml-auto'>
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)} >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="44" height="80" fill="currentColor" className="bi bi-list"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd" />
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                </div>

            </nav>


            <div className={`md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-400 text-slate-300 font-serif ${isOpenMenu
                ? "h-full py-4 border-t-2 border-slate-700"
                : " py-0 h-0 border-none"}`}
                style={{ height: isOpenMenu ? 257 : 0 }} >





                <ul className='flex flex-col gap-4'>


                    {menuItems.map(item => (

                        <li key={item.path}><NavLink className={activeClass} to={item.path} onClick={() => setIsOpenMenu(false)} >{item.text} {item.text.toLocaleLowerCase()} </NavLink> </li>
                    ))}

                </ul>
                <div className='mt-4 flex gap-4 justify-center  items-center border-t-2 pt-4 border-slate-700'>

                    <NavLink to="/login" className='  bg-teal-600 rounded-xl py-2 px-5 text-white'>login</NavLink>
                    <NavLink to="/signup" className='bg-rose-600 rounded-xl py-2 px-4 text-white '>sign up</NavLink>

                </div>
            </div>
        </>


    );
}
