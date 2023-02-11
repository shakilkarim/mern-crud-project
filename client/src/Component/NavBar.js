import React from 'react';

import { BsFillHouseDoorFill } from 'react-icons/bs';
import CustomLink from './CustomLink';

const navLink=<>
        <li className='p-3 text-2xl'><CustomLink to='/'>Read</CustomLink></li>
        <li className='p-3 text-2xl'><CustomLink to='/create'>Create</CustomLink></li>
</>

const NavBar = ({children}) => {
    return (
        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 

            <div className="flex-1 px-2 mx-2">
               <p className='flex justify-between items-center w-16 '> < BsFillHouseDoorFill/> <h1 className='text-xl'> CRUD</h1></p> 
                <div className="flex-none hidden lg:block">
              <ul className=" menu-horizontal p-2">
                {/* <!-- Navbar menu content here --> */}
                {navLink}
              </ul>
            </div>
            </div>
           
          </div>
          {/* <!-- Page content here --> */}
         {children}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {navLink}
            
          </ul>
          
        </div>
      </div>
    );
};

export default NavBar;