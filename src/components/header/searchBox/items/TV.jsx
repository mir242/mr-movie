import React from 'react'
import { imgUrl } from '../../../../helper/imgUrl'
import { Link } from 'react-router-dom'

export default function TV({ item }) {
  return (
<Link to={`/tv/${item.id}`}>


<div className='flex gap-3 items-center text-lg  '>
      <img src={item.poster_path ? imgUrl(item.poster_path, "w92") : '/movie.jpg'} alt="" className='object-cover w-14 h-14 rounded-2xl' />
      <p>{item.name}</p>

    </div>

    </Link>




  )
}
