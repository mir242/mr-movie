import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function Login() {
const {login,session} =useContext (UserContext); 

function handleLogin (e){
    e.preventDefault();

    
const {username,password} =e.target.elements;
 

login(username.value,password.value)
} 

  return (
    <div>
      <h1>login page</h1>
      
    <div className="min-h-screen flex items-center justify-center  from-pink-600 to-green-600-100"  style={{
        backgroundImage: ` linear-gradient(to left, rgb(136 145 94 / 30%), rgb(3 41 69 / 80%), rgb(0 0 0 / 100%))`,}}   >
          <div  className="max-w-md w-full m-4 space-y-8 p-10  rounded-2xl shadow-lg shadow-cyan-500/100 border border-slate-600 border-opacity-85">  
  
<form action="" onSubmit={handleLogin} className='flex flex-col gap-5'>

<input type="text" name='username' placeholder='username'    className="w-full px-4 py-3 border-2  border-gray-600 bg-sky-900 rounded-xl focus:border-gray-800 focus:outline-none transition duration-300"
               />
<input type="password" name='password' placeholder='userpasssword'     className="w-full px-4 py-3 border-2  border-gray-600 bg-sky-900 rounded-xl focus:border-gray-800 focus:outline-none transition duration-300"
              />


<input type="submit" value="login" className="w-full py-4 px-6 bg-blue-700 hover:bg-blue-900 text-white  rounded-xl shadow-2xl transition duration-300 text-lg"/>

   <Link to={'/SignUp'} className=' text-cyan-700 hover:text-cyan-500'>
    Didn't register?  ,
   Register here
    </Link>
</form>
<p>{session}</p>

</div>
  </div>
    </div>
  );
}
