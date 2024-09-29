import React from 'react'
import MovieCard from '../Movies/MovieCard'
import MoviesListSlider from './MoviesListSlider'

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



  // Add more movie objects
]

export default function MoviesList() {
  return (
    <div className=' container '>
      <div className='pt-8'>
        <div className='md:flex gap-8 items-center md:mb-4 '>
          <h2 className='text-slate-300 text-2xl'>what's popular</h2>

          <ul className='my-6 flex flex-col gap-4 md:gap-8 text-green-300 md:flex-row'>
            <li>Streaming</li>
            <li>On Tv</li>
            <li>ForRent</li>
            <li>In Theaters </li>
          </ul>
          </div>
        <MoviesListSlider movies={movies} />
      </div>
      <div className='pt-8'>
        <div className='md:flex gap-8 items-center md:mb-4 '>
          <h2 className='text-slate-300 text-2xl'>Free to watch</h2>

          <ul className='my-6 flex flex-col gap-4 md:gap-8 text-green-300 md:flex-row'>
            <li>Movie</li>
            <li>Tv</li>
         
          </ul>
          </div>
        <MoviesListSlider movies={movies} />
      </div>
    </div>
  )
}
