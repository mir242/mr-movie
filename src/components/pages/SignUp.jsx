import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form submitted:', formData)
    navigate('/login')
  }

  return (






    <div className="min-h-screen flex items-center justify-center  from-pink-600 to-green-600-100"  style={{
        backgroundImage: ` linear-gradient(to left, rgb(136 145 94 / 30%), rgb(3 41 69 / 80%), rgb(0 0 0 / 100%))`,}}   >
      <div className="max-w-md w-full m-4 space-y-8 p-10  rounded-2xl shadow-lg shadow-cyan-500/100 border border-slate-600 border-opacity-85">
        <div className="text-center">
          <h2 className="text-4xl font-thin text-amber-400 adow-lg 	  mb-2"> SIGN UP</h2>
          <p className="text-slate-300 font-thin"> Welcome to our family   </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

          <div className="space-y-5">
            <div>

              <label className="block text-lg  text-slate-300 mb-2">
            USER NAME
              </label>
              <input

                name="username"
                type="text"
                required

                className="w-full px-4 py-3 border-2 border-gray-600 bg-sky-900 rounded-xl focus:border-gray-800 focus:outline-none transition duration-300"
                placeholder="username "
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div>

              <label className="block text-lg text-slate-300 mb-2">
             EMAIL
              </label>
              <input

                name="email"
                type="email"
                required

                className="w-full px-4 py-3 border-2  border-gray-600 bg-sky-900 rounded-xl focus:border-gray-800 focus:outline-none transition duration-300"
              
                placeholder="Enter your email "
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>

              <label className="block text-lg  text-slate-300 mb-2">
                PASSWORD
              </label>
              <input

                name="password"
                type="password"
                required

                className="w-full px-4 py-3 border-2  border-gray-600 bg-sky-900 rounded-xl focus:border-gray-800 focus:outline-none transition duration-500"
                placeholder="Enter your password "
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>

              <label className="block text-lg  text-slate-300 mb-2">
              Repeat Password
              </label>
              <input

                name="confirmPassword"
                type="password"
                required

                className="w-full px-4 py-3 border-2  border-gray-600 bg-sky-900 rounded-xl focus:border-gray-800 focus:outline-none transition duration-300"
                placeholder="Re-enter the password  "
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>





          <button
            type="submit"
            className="w-full py-4 px-6 bg-blue-700 hover:bg-blue-900 text-white  rounded-xl shadow-2xl transition duration-300 text-lg"
          >
            OK
          </button>

          <div className="text-center">
            <Link 
              to="/login" 
              className="text-slate-500 hover:text-blue-300 text-lg transition duration-300"
            >


Already a member? login...
            </Link>
          </div>
        </form>






      </div>
    </div>
  )
}




