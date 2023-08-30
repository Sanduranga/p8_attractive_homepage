
import { motion } from 'framer-motion'


const Logo = () => {
    return(
        <motion.div
            initial={{
                y: -100
            }}
            animate={{
                y: 0                
            }}
            transition={{
                delay: 1.5,
                type: 'spring',
                stiffness: 120
            }}
            className='tracking-widest'>
            <div className='text-black font-bold text-4xl'>SrangThinQ</div>
            <div className='text-gray-800 text-sm uppercase'>Best IT gang in the world</div>
        </motion.div>
    )
}

export default Logo