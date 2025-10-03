import Logo from '../../assets/images/logo.svg';
import LogoDark from '../../assets/images/logo-dark.svg'
import IconSun from '../../assets/images/icon-sun.svg';
import IconMoon from '../../assets/images/icon-moon.svg';
import { useState } from 'react';

export const Header = () => {


  const sevedTheme = localStorage.getItem('dark')
  //console.log( JSON.parse(sevedTheme));
  if (JSON.parse(sevedTheme)) {
    document.documentElement.classList.add('dark');
  }

  const [isDark, setIsDark] = useState(JSON.parse(sevedTheme))

  const handleClick = () => {
    const isDarkChanged = document.documentElement.classList.toggle('dark');
    setIsDark(isDarkChanged);
    localStorage.setItem('dark', isDarkChanged)
  }

  return (

    <div className='
     bg-Neutral-0
     dark:bg-Neutral-800 
      flex justify-between 
      h-[66px] 
      px-3 
      py-2  
      rounded-[10px]
      items-center
      mb-6
      
      '>
      <img src={isDark ? LogoDark : Logo} alt="Logo" />
      <button
        onClick={handleClick}
        className='
      bg-Neutral-100 
      size-[50px] 
      grid place-content-center
      rounded-lg
      cursor-pointer
      hover:bg-Neutral-200
      dark:bg-Neutral-600
      dark:hover:bg-Neutral-700
      ' >
        <img src={isDark ? IconSun : IconMoon} alt="Icon button"  />
      </button>

    </div>

  )
}


