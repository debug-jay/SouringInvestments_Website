import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const NAVBAR = () =>
{
    const [show, setShow] = useState(false);

    function showNavList(){
        setShow(!show);
    }


  return(
    <div className='fixed w-full z-50'>
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 bg-opacity-30 backdrop-blur-sm p-6" id="navbar">
      

  <div className=" items-center flex-shrink-0 text-white mr-0 justify-center md:ml-24 space-x-2 grid grid-cols-2 w-16">
  <div className=' w-9'>
    <a href="/">
      <svg
      xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox='0 0 32 32'
      enableBackground="new 0 0 32 32">
        <path class="st0" d="M16.05,16.01"/>
        <path class="st1" d="M22.38,9.62"/>
        <path class="st1" d="M3.2,28.95"/>
        <path class="st1" d="M20.9,11.24"/>
        <path class="st2" d="M32,0"/>
        <polygon class="st3" points="32,0 32,32 6.01,32 6.01,31.49 31.45,0 "/>
        <polygon class="st3" points="5.98,30.01 6.52,30.01 23.06,9.62 23.06,9.07 18.18,0 0,0 0,0.55 "/>

      </svg>
      </a>
      
    </div>
    <span className="font-semibold text-2xl tracking-wider" id="comptext">Souring</span>
  </div>
  
  <div className='flex lg:hidden justify-end items-center'>
    <div className='lg:mr-5 hidden sm:block '>
      <Link to="/signup" className=" flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-0 mobile:ml-5 border border-blue-500 rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 md:mt-0">Sign Up</Link>
    </div>
    <div className='lg:mr-5 hidden sm:block'>
        <Link to="/login" className=" flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-4 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white md:mt-0">Login</Link>
    </div>
    <div className="block lg:hidden">
    <button onClick={() => showNavList()} className="flex items-center px-3 py-2 border rounded text-blue-200 border-white hover:text-white hover:border-white">
      <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
    </div>

    {/** For Desktop */}
    <div className="hidden bg-transparent w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:backdrop-blur-none lg:border-none" id='nav-handler'>
    <div className="text-md lg:flex-grow lg:flex justify-center items-center">
      <a href="/#about" className="flex justify-center mt-5 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
        About Us
      </a>
      <a href="/#teams" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
        Our Teams
      </a>
      <a href="/#journey" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
        The Journey
      </a>
    </div>
    <div className='lg:mr-5 sm:hidden'>
      <Link to="/signup" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-blue-500 rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 mt-4 lg:mt-0">Sign Up</Link>
    </div>
    <div className='lg:mr-5 sm:hidden'>
        <Link to="/login" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
    </div>

    <br/>
  </div>

  {/** For Mobile */}
  {show?
    <div className=" bg-transparent w-full block flex-grow lg:flex lg:items-center lg:w-auto  lg:backdrop-blur-none lg:border-none" id='nav-handler'>
    <div className="text-md lg:flex-grow lg:flex justify-center items-center">
      <a href="/#about" className="flex justify-center mt-5 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
        About Us
      </a>
      <a href="/#teams" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
        Our Teams
      </a>
      <a href="/#journey" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
        The Journey
      </a>
    </div>
    <div className='lg:mr-5 sm:hidden'>
      <Link to="/signup" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-blue-500 rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 mt-4 lg:mt-0">Sign Up</Link>
    </div>
    <div className='lg:mr-5 sm:hidden'>
        <Link to="/login" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
    </div>

    <br/>
  </div>:null}
  <div className=' hidden lg:inline-flex'>
    <div className='lg:mr-5'>
      <Link to="/signup" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-blue-500 rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 mt-4 lg:mt-0">Sign Up</Link>
    </div>
    <div className='lg:mr-5'>
        <Link to="/login" className="mb-5 lg:mb-0 flex justify-end items-end text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-0 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
    </div>
    </div>
</nav>
<Outlet/>
</div>);
    
}
