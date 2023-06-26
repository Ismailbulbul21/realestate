import React from "react";
import {BrowserRouter as Router , Routes,Route , Link} from 'react-router-dom'
import { Home } from "./pages/Home";
import {Contact  } from "./pages/Contact";
import { About } from "./pages/About";
import { Nav } from "./components/Nav";


function App() {
  return (
    <div className="">
    
<Router>
<Nav/>
<Routes>

<Route path="/"  element={<Home/>}/>
<Route path="Contact"  element={<Contact/>}/>
<Route path="About"  element={<About/>}/>

</Routes>





</Router>














    </div>
  );
}

export default App;
