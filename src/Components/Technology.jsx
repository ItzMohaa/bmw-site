import { motion } from "framer-motion";
import tech from './Images/tech.jpg';
import cockpit from "./Images/cp.jpg";
import { VariantContext } from "../Contexts/Variants";
import { useContext } from "react";

const Technology = () => {
    const variants = useContext(VariantContext)

    return ( <motion.div variants={variants} initial='hidden' animate='visible' exit='exit' transition={{duration:1}} className="technology flex justify-center ">
        <div className=" w-3/4 images grid grid-cols-2 justify-center ">
     
            <div className=""><img className=' w-96 h-52 ' src={tech}/>
            <h1 className="labels">New Cutting Edge Technology</h1>
            </div>
        
           <div> <img className='w-80 h-52' src={cockpit}/>
           <h1 className="label">Refined Carbon Fibre Cockpit </h1>
           </div>

            </div>
            
           
    
       
    </motion.div> );
}
 
export default Technology;