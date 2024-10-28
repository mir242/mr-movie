import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom';
import { imgUrl } from '../../helper/imgUrl';

export default function Profile() {
  const { user, session } = useContext(UserContext);
  console.log("اطلاعات کاربر:", user);
  
  return session ? (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">profile page</h1>
      {user && (
        <div className="flex flex-col items-center">
          {user.avatar?.tmdb?.avatar_path && (
            <img 
              src={imgUrl(user.avatar.tmdb.avatar_path, 'original')} 
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover"
            />
          )}
          <h2 className="mt-4 text-xl">{user.name}</h2>
        </div>
      )}
    </div>
  ) : (
    <Navigate to='/login' replace={true}/>
  )
}