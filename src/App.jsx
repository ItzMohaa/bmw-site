import Navbar from "./Components/Navbar";
import { useLocation } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Main from './Components/Main';
import History from "./Components/History";
import Technology from './Components/Technology';
import { VariantContext } from "./Contexts/Variants";
import { AnimatePresence } from "framer-motion";
import Discover from "./Components/Discover";
import { useState } from "react";

const App = () => {
    const variants = {
        hidden:{
            x:"-100vw",
            opacity: 0
        },
        visible:{
            x:0,
            opacity:1
        },
        exit:{
           x:"-100vw",
           transition:{duration:1}
           
            

        }
    };
    const location = useLocation();
    const [bgcolor,  newcolor]= useState('black')
 
   
    return (
       

        <div className="App" >

            <VariantContext.Provider value={variants}>
           
            <Navbar />
            

            <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/history" element={<History/>}/>
                <Route exact path="/technology" element={<Technology/>}/>
                <Route excat path ='/discover' element={<Discover/>}/>
                
            </Routes>
            </AnimatePresence>
           
            </VariantContext.Provider>
        </div>
    );
}

export default App;
