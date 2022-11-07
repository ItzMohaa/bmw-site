import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Main from "./Main";
import History from "./History";
import Technology from "./Technology";
import { VariantContext } from "../Contexts/Variants";
import { AnimatePresence } from "framer-motion";
import Discover from "./Discover";

const Home = () => {
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
   
    return (
       

        <div className="home">
            <VariantContext.Provider value={variants}>
           
            <Navbar />
            {/* <Mcolors /> */}

            <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/history" element={<History />}/>
                <Route exact path="/technology" element={<Technology/>}/>
                <Route excat path ='/discover' element={<Discover/>}/>
                
            </Routes>
            </AnimatePresence>
           
            </VariantContext.Provider>
        </div>
    );
}

export default Home;