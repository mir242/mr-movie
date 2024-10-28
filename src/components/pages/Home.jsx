import React, { useState } from 'react'
import MoviesListSlider from '../Main/MoviesListSlider'


export default function Home() {
    const [moviesActivTab, setmoviesActivTab] = useState('upcoming');
    const [tvActivTab, setTvActivTab] = useState('airing_today');

    function handleChangeMoviesActivTab(tab) {
        setmoviesActivTab(tab);




    }
    function handleChangeTvActivTab(tab) {
        setTvActivTab(tab);




    }


    function activeClass(tab) {
        return tab === moviesActivTab ? 'text-yellow-200 text-2xl font-bold hover:text-yellow-400 ' : '';
       
        

    }



    function activeTvClassName(tab) {

        return tab === tvActivTab ? 'text-yellow-200 text-2xl font-bold hover:text-yellow-400 ' : '';

   console.log (tvActivTab);
    
    
    }




    return (
        <div className=' container '>
            <div className='pt-8'>
                <div className='md:flex gap-8 items-center md:mb-4 '>
                    <h2 className='text-rose-950 text-3xl'>Movies </h2>

                    <ul className=' my-6 flex flex-col gap-4 md:gap-10 font-mono text-green-200 md:flex-row  md:text-lg [&>*]:cursor-pointer'>
                        <li onClick={() => handleChangeMoviesActivTab('upcoming')} className={activeClass('upcoming')}>Upcoming </li>
                        <li onClick={() => handleChangeMoviesActivTab('now_playing')} className={activeClass('now_playing')}>Now_Playing</li>
                        <li onClick={() => handleChangeMoviesActivTab('popular')} className={activeClass('popular')}>Popular</li>
                        <li onClick={() => handleChangeMoviesActivTab('top_rated')} className={activeClass('top_rated')}>Top_rated </li>
                    </ul>



                </div>
                <MoviesListSlider activTab={moviesActivTab} type='movie' />



            </div>
            <div className='pt-8'>
                <div className='md:flex gap-8 items-center md:mb-4 '>
                    <h2 className='text-rose-950 text-2xl'>  TV & serials  </h2>

                    <ul className='  my-6 flex flex-col gap-4 md:gap-10 font-mono text-green-200 md:flex-row  md:text-lg [&>*]:cursor-pointer'>
                        <li onClick={() => handleChangeTvActivTab('airing_today')} className={activeTvClassName('airing_today')}>Airing Today</li>
                        <li onClick={() => handleChangeTvActivTab('on_the_air')} className={activeTvClassName('on_the_air')}>On the Air</li>
                        <li onClick={() => handleChangeTvActivTab('popular')} className={activeTvClassName('popular')}>popular</li>
                        <li onClick={() => handleChangeTvActivTab('top_rated')} className={activeTvClassName('top_rated')} >top_rated</li>
                    </ul>
                </div>

                <MoviesListSlider activTab={tvActivTab} type='tv' />

            </div>
        </div>
    )
}
