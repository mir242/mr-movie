import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'swiper/css';    
import './index.css'
import { router } from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import UserProvider from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(

<RouterProvider router={router} />
 




);
