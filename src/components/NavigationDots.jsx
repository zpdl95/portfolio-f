import React from 'react';
import { navList } from './Navbar/Navbar';

const NavigationDots = ({ active }) => (
  <div className='app__navigation'>
    {navList.map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className='app__navigation-dot'
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
