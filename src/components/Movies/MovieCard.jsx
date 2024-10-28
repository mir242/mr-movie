import React from 'react'
import { Link } from 'react-router-dom';



export default function MovieCard({ movie,type='movie' ,imgSize="w780" }) {

      
    return (
        <Link to={`/${type==='movie'? 'movies' :"tv" }/${movie.id}`}>
            <div className='bg-gray-400 aspect-[2/3] relative  rounded-l  overflow-hidden'>
                <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} className=' object-cover w-full h-full  ' alt="" />

               


                <div className='flex flex-col justify-end absolute bottom-0 left-0 right-0 w-full h-full p-8 bg-gradient-to-t from-teal-950   to-pink-500 opacity-30 hover:opacity-0 transition-opacity duration-200'  >
                    <h3>{movie.title ||movie.name}</h3>
                    <div className='flex gap-2 mt-2'>
                        <span className=' text-yellow-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                            </svg>



                        </span>
                        <span>{movie.vote_average } /10</span>


                    </div>
                </div>

            </div>


        </Link>


    );
}
