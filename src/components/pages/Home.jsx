import React from 'react'
import MoviesListSlider from '../Main/MoviesListSlider'


const movies = [

    'src/components/image/ask1.jpg',
    'src/components/image/ask2.jpg',
    'src/components/image/ask3.jpg',
    'src/components/image/ask4.jpg',
    'src/components/image/ask5.jpg',
    'src/components/image/ask6.jpg',
    'src/components/image/ask7.jpg',
    'src/components/image/ask8.jpg',
    'src/components/image/ask9.jpg',
    'src/components/image/ask10.jpg',
    'src/components/image/ask11.jpg',
    'src/components/image/ask12.jpg',
    'src/components/image/ask13.jpg',

    // Add more movie objects
]

export default function Home() {
    return (
        <div className=' container'>
            <div className='pt-8'>
                <div className='md:flex gap-8 items-center md:mb-4 '>
                    <h2 className='text-slate-300 text-2xl'>what's popular</h2>
                    <a href="/">
                        <ul className='my-6 flex flex-col gap-4 md:gap-8 text-green-200 md:flex-row'>
                            <li className=' hover:text-yellow-100'>Streaming</li>
                            <li className=' hover:text-yellow-100' >On Tv</li>
                            <li className=' hover:text-yellow-100'>ForRent</li>
                            <li className=' hover:text-yellow-100'>In Theaters </li>
                        </ul>
                    </a>


                </div>
            {/*   <MoviesListSlider movies={movies} >*/}
            </div>
            <div className='pt-8'>
                <div className='md:flex gap-8 items-center md:mb-4 '>
                    <h2 className='text-slate-300 text-2xl'>Free to watch</h2>


                    <a href="/">
                        <ul className='my-6 flex flex-col gap-4 md:gap-8 text-green-200 md:flex-row'>
                            <li className=' hover:text-yellow-100'>Movie</li>
                            <li className=' hover:text-yellow-100'>Tv</li>
                        </ul>
                    </a>

                </div>
               { /*<MoviesListSlider movies={movies} /> */}
            </div>
        </div>
    )
}
