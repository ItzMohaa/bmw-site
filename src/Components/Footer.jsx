import m4 from './Images/m4.png'
import { motion } from "framer-motion";
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
const Footer = () => {
    const Cars ={
        M4:{
            img: m4,
            price: "$40,000",
            power: "450hp",
            engine: "3.5 Litre Turbocharged Inline 6"
        },

        
    };

    const [price,setprice] = useState(Cars.M4.price);
    const [power,setpower] = useState(Cars.M4.power);
    const [engine,setengine] = useState(Cars.M4.engine);
    
    return (
        <motion.div initial={{y:"100vh"}} animate={{y:0}} transition={{type:'tween', duration:1, delay:0}} exit={{y:"60vh" }} className="footer">
           

            <div className="details">
                
            <img src={m4} alt='m4'/>
                <ul className='ml-6 mt-1'>
                    <li> Base Price <br></br> <span>{price}</span></li>
                    <li> Power <br></br><span>{power}</span></li>
                    <li> Engine <br></br><span>{engine}</span></li>
                </ul>
            </div>

            {/* <div className="pages">
                <ul>
                    <motion.li whileHover={{scale:1.4}}>1</motion.li>
                    <motion.li whileHover={{scale:1.4}}>2</motion.li>
                    <motion.li whileHover={{scale:1.4}}>3</motion.li>
                    <motion.li whileHover={{scale:1.4}}>4</motion.li>
                    <motion.li whileHover={{scale:1.4}}>5</motion.li>
                </ul>
            </div> */}
        </motion.div>
      );
    }
 

export default Footer;