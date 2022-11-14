import { useContext} from "react"
import {motion} from "framer-motion"
import { VariantContext } from "../Contexts/Variants";

const Discover = () => {

    const variants = useContext(VariantContext);

    return ( 

        <motion.div variants={variants} animate="visible" initial='hidden' exit='exit' transition={{duration:1, type:'tween'}} className="discover">

            <h1 className="m-14 ml-20 w-screen h-screen ">DISCOVER</h1>

            
        </motion.div>
     );
}
 
export default Discover;