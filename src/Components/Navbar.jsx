import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from './Images/logo.png'
import { useContext } from "react";
import { VariantContext } from "../Contexts/Variants";
import { useState } from "react";

const Navbar = () => {
    const variants = useContext(VariantContext);

    return ( 
        <motion.div variants={variants} initial="hidden" animate="visible" transition={{type:"tween", duration:1}} className="navbar ">
            
            <div className="logo">
                <img src ={logo} alt='bmwlogo'/>
            </div>

            
                <ul>
                <NavLink to="/" end> <motion.li whileHover={{scale:1.4}} transition={{type:"spring", duration:0.8}}>Home</motion.li></NavLink>
                   <NavLink  to="/history"> <motion.li  whileHover={{scale:1.4}} transition={{type:"spring", duration:0.8}}>History</motion.li></NavLink>
                   <NavLink to="/technology"> <motion.li whileHover={{scale:1.4}} transition={{type:"spring", duration:0.8}}>Technology</motion.li></NavLink>
                   <NavLink to= '/production'>  <motion.li whileHover={{scale:1.4}} transition={{type:"spring", duration:0.8}}>Production</motion.li></NavLink>
                </ul>

                <button id = 'btn'>Contact Us</button>
          
        </motion.div>
     );
}
 
export default Navbar;