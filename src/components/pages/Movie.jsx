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
        <div>
            {movie ? (
                <div>
                    <h1> {movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />


                    <button className='p-2 bg-slate-600 ' onClick={handleAddToWatchList}>add to watch  list!</button>
                </div>

            ) : (
                <h1>loading...</h1>
            )}
        </div>
    );
}
