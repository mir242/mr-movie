import axios, { Axios } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Await, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Result } from 'postcss';
import toast from 'react-hot-toast';
/////////////////////
const apiKey = 'af4c9f1e80dff26c7cbecc443e535d19';
const baseUrl = 'https://api.themoviedb.org/3';


export default function Movie() {
    const [movie, setmovie] = useState(null);
    const { id } = useParams();
    const { user, session } = useContext(UserContext);

    async function handleAddToWatchList() {
        const result = await axios.post(
            `${baseUrl}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
            {
                media_type: "movie",
                media_id: movie.id,
                favorite: true
            }
        );

        toast.success(`به فهرست علاقه مندی شما اضافه شد   ${movie.title}`)

    }




    async function loadMovie() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=af4c9f1e80dff26c7cbecc443e535d19&language=en-US&page=1`);
        setmovie(data);
    }


    useEffect(() => {
        loadMovie();
    }, [id]);


    return (
        <div className="min-h-screen bg-gray-900 py-10">
            {movie ? (
                <div className='container mx-auto px-4 max-w-6xl'>
                    <div className='grid md:grid-cols-2 gap-12'>
                        {/* Movie Poster Section */}
                        <div className='flex flex-col items-center'>
                            <h1 className='text-4xl font-bold text-white mb-8 text-center'>{movie.title}</h1>
                            <img 
                                className='rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300'
                                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} 
                                alt={movie.title} 
                            />
                        </div>
    
                        {/* Movie Details Section */}
                        <div className='flex flex-col space-y-6'>
                            <time 
                                className='inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold'
                                datetime={movie.release_date}
                            >
                                {movie.release_date}
                            </time>
                            
                            <p className='text-gray-300 text-lg leading-relaxed'>
                                {movie.overview}
                            </p>
    
                            <button 
                                onClick={handleAddToWatchList}
                                className='bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg'
                            >
                                Add to Watch List
                            </button>
    
                            <hr className='border-gray-700 my-8'/>
    
                            <div className='flex justify-center gap-6'>
                                <button className='flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16"/>
                                    </svg>
                                    Add to Favorites
                                </button>
    
                                <button className='flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg transition-colors duration-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                                    </svg>
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
                </div>
            )}
        </div>
    );
}
