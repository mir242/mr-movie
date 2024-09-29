import { useState } from 'react'
import Navigation from './Navigation';
import SearchBox from './headerSlider/SearchBox';
import FollowUs from '../FollowUs';
import HeaderSlider from './headerSlider/HeaderSlider';


export default function Header() {
  const [bg, setBg] = useState('./ask1.jpg');

  return (
    <header className=' transition-all duration-500  bg-cover bg-center pd-8 md:py-8'
      style={{
        backgroundImage: ` linear-gradient(to right, rgb(106 84 67 / 66%), rgb(36 3 69 / 88%), rgb(4 85 98 / 70%)), url('${bg}') `,
      }}>


<Navigation />

      <div className='container'>
        
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
} 
