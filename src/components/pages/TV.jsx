import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function TV() {
    const [tv, setTv] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setTv(data)
            })
    }, [id])

    if (!tv) return null

    return (
        <div className='container'>
            <div className='relative min-h-[500px] rounded-xl overflow-hidden my-8'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`} 
                    className='absolute w-full h-full object-cover'
                    alt={tv.name} 
                />
                <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent'>
                    <div className='flex gap-8 h-full items-center p-8'>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                            className='w-64 rounded-xl'
                            alt={tv.name}
                        />
                        <div className='text-white'>
                            <h1 className='text-4xl font-bold mb-4'>{tv.name}</h1>
                            <div className='flex gap-4 mb-4'>
                                <span>{tv.first_air_date?.split('-')[0]}</span>
                                <span>{tv.number_of_seasons} seasons</span>
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <span className='text-yellow-400'>★</span>
                                <span>{tv.vote_average?.toFixed(1)}/10</span>
                            </div>
                            <p className='max-w-xl text-gray-200'>{tv.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


