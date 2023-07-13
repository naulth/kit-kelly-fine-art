import React from 'react'
import {NavLink} from 'react-router-dom'
import "../index.css"

function Nav() {

	return(

    	<header className="bg-blue-100 sticky top-0 z-10 ">
  			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    			<div className="flex flex-1">
      				<div className="hidden lg:flex lg:gap-x-12">
        				<NavLink to="/paintings" id="title" className="text-2xl font-black leading-6 text-black">paintings</NavLink>
        				<NavLink to="/restorations" id="title" className="text-2xl font-black leading-6 text-black">restorations</NavLink>
        				
      				</div>
    			</div>
    			<NavLink to="/" end id="title" className="hidden text-black font-black text-4xl lg:flex">Kit Kelly Fine Art</NavLink>
    			<div className="flex flex-1 justify-end">
    				<NavLink to="/contact" id="title" className="text-2xl leading-6 font-black text-black">contact me</NavLink>
    			</div>
  			</nav>
		</header>

// 		<header className="bg-gray-100 sticky top-0">
//   			<nav className="sticky top-0">
// 				<div>
// 					<NavLink to="/" end className="hidden text-black lg:flex">Kit Kelly Fine Art</NavLink>
// 				</div>
//     			{/* <div class="flex lg:hidden">
//       				<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
//         				<span class="sr-only">Open main menu</span>
//         				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//           					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//         				</svg>
//       				</button>
//     			</div> */}
// 				<div className="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-end">
// 					<NavLink to="/paintings" className="text-md leading-6 text-black">Paintings</NavLink>
// 					<NavLink to="/restorations" className="text-md leading-6 text-black">Restorations</NavLink>
// 					<NavLink to="/contact" className="text-md leading-6 text-black">Contact</NavLink>
// 				</div>
//   			</nav>
  
// </header>

	)
}

export default Nav