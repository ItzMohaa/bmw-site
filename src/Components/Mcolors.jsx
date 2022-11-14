import { motion } from "framer-motion";

const Mcolors = () => {
    const variants = {
        exit:{
            height:0,
            transition:{
                delay:0,
                duration:1
            }
        }
    }
    return ( 
        <motion.div  className="mcolors">
            <motion.div variants={variants} initial={{height:0}} animate={{height:"100vh"}} transition={{ duration:1, delay:1}}  exit="exit" className="color1"></motion.div>
            <motion.div variants={variants} initial={{height:0}} animate={{height:"100vh"}} transition={{ duration:1, delay:1.1}} exit="exit" className="color2"></motion.div>
            <motion.div variants={variants} initial={{height:0}} animate={{height:"100vh"}} transition={{ duration:1, delay:1.2}}  exit="exit" className="color3"></motion.div>
        </motion.div>
     );
}
 
export default Mcolors;