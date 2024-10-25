import React from 'react'
import { imgUrl } from '../../../../helper/imgUrl'
import { Link } from 'react-router-dom';
export default function Person({ item }) {
  return (

    <Link to={`/people/${item.id}`}>

      <div className='flex gap-3 items-center text-lg  '>
        <img src={item.profile_path ? imgUrl(item.profile_path, "w45") : '/prof.jpg'} alt="" className='object-cover w-14 h-14 rounded-2xl' />
        <p>{item.name}</p>

      </div>


    </Link >
  );
};
