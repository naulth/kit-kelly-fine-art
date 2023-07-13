import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Paintings from "./Components/Paintings"

function App() {
	return (
    	<div className="">
            <Nav />
			<Routes>
				<Route path="/" element={<Home/>} />
                <Route path="/paintings" element={<Paintings/>} />
			</Routes>
    	</div>
  	);
}

export default App;
