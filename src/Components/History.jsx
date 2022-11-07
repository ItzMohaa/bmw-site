import { motion } from "framer-motion";
import { useEffect } from "react";

import { useContext } from "react";
import { VariantContext } from "../Contexts/Variants";




const History = ( ) => {
 

   
      
    
    const variants = useContext(VariantContext);
      
    
    return ( <motion.div  variants={variants} initial="hidden" animate="visible" exit="exit" transition={{duration:1}} className="history">

        <div className="history w-2/4 m-16">
        The official founding date of the German motor vehicle manufacturer BMW is 7 March 1916, when an aircraft producer called Bayerische Flugzeugwerke (formerly Otto Flugmaschine
        nfabrik) was established. This company was renamed to Bayerische Motoren Werke (BMW) in 1922. However, the BMW
         name dates back to 1917, when Rapp Motorenwerke changed its name to Bayerische Motoren Werke. BMW's first product was a straight-s
         ix aircraft engine called the BMW IIIa. Following the end of World War I, BMW remained in business by producing motorcycle engines, farm equipment
         , household items and railway brakes. The company produced its first motorcycle, the BMW R32, in 1923.
BMW became an automobile manufacturer in 1928 when it purchased Fahrzeugfabrik Eisenach, whi
ch built Austin Sevens at that time under licence (under the Dixi marque).The first car sold as a BMW was a rebadged Dixi called the BMW 3/15. Throughout the 1930s, BMW expanded its range into sports cars and larger luxury cars.
        </div>
      
    </motion.div> );
}
 
export default History;