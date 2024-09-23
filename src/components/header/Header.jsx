import React, { useState } from 'react'
import Navigation from './navigation';
import SearchBox from './header/SearchBox';
import FollowUs from '../FollowUs';
import HeaderSlider from './header/HeaderSlider';


export default function Header() {
  const [bg, setBg] = useState('/ask1.jpg');

  return (
    <header className='py-12 bg-cover bg-center'
      style={{
        backgroundImage: ` linear-gradient(to right, rgb(106 84 67 / 66%), rgb(36 3 69 / 88%), rgb(4 85 98 / 70%)), url('${bg}') `,
      }}>
      <div className='container'>
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
}
