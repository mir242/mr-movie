import { useState } from 'react'
import Navigation from './Navigation';
import SearchBox from './searchBox/SearchBox';
import FollowUs from '../FollowUs';
import HeaderSlider from './headerSlider/HeaderSlider';
import { useLocation } from 'react-router-dom';


export default function Header() {
  const location = useLocation();
  const [bg, setBg] = useState("src/components/image/ask14.jpg");



  return (
    <header
      className={`transition-all duration-500  bg-cover bg-center pd-8 md:py-8 
         ${location.pathname !=='/' ? 'h-[600px]' : ""
         }`}
      style={{
        backgroundImage: ` linear-gradient(to top, rgb(136 145 94 / 30%), rgb(3 41 69 / 80%), rgb(0 0 0 / 100%)), url('${bg}') `,
      }}>


      <Navigation />

      <div className='container '>

        <SearchBox />

<div className= {`${location.pathname !== '/' ? 'hidden':""}`}>
  <FollowUs />
            <HeaderSlider setBg={setBg} />
</div>

       
    
      </div>
    </header>
  );
} 
