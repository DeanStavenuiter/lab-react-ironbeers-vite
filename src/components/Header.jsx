import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header style={{background: 'lightBlue', height: '100px', display: 'flex'}}>
        <ul style={{display: 'flex', alignItems: 'center', listStyle: 'none', gap: '15px', width: '100%', justifyContent: 'center', padding: '0'}}>
          <li >
            <NavLink style={{color: 'white'}} to="/">Home</NavLink>
            </li>
            <li>
                 <NavLink style={{color: 'white'}} to="/beers">all beers</NavLink>
            </li>
           <li>
             <NavLink style={{color: 'white'}} to="/new-beer">new beer</NavLink>
           </li>
           <li>
             <NavLink style={{color: 'white'}} to="/random-beer">random beer</NavLink>
           </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
