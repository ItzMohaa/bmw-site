import { motion } from "framer-motion";
import Mlogo from './Images/M.png';
import { BsArrowUpRight} from "react-icons/bs";
import Footer from "./Footer";
import { useContext } from "react";
import { VariantContext } from "../Contexts/Variants";
import Mcolors from "./Mcolors";


const Main = () => {
    const variants = useContext(VariantContext);
    return ( 


        <div>
        
        <motion.div variants={variants} initial="hidden" animate="visible" transition={{duration:1}} exit="exit" className="main">

                
        <img id= 'mperf' src={Mlogo} alt='Mlogo' />
        <p>Introducing the all-new BMW M Series</p>
        <button id='discover'>DISCOVER<span><BsArrowUpRight/></span> </button>

      
        </motion.div>

        <Mcolors/>
        
        <Footer/>
        </div>

   
   
     );
}
 
export default Main;