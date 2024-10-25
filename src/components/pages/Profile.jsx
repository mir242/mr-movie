import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, session } = useContext(UserContext);
  const navigate = useNavigate();

  return session ? (
    <div>
      <h1>profi;e pages</h1>
      <h2>{user.name}</h2>
    </div>



  ):(
    <Navigate to='/login'  replace={true}/>
  )

}

