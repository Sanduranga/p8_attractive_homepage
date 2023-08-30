import { motion } from "framer-motion";

interface BottomChildrenProps {
  children: string;
}

const bottomChildVariant = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};

const BottomChildren = (props: BottomChildrenProps) => {
  return (
    <motion.div
      variants={bottomChildVariant}
      className="flex justify-center items-center text-center md:underline underline-offset-8 bg-gray-200 text-black py-3 text-sm md:text-lg w-[18vw] rounded-md font-bold"
    >
      {props.children}
    </motion.div>
  );
};

const boxVariants = {
  animate: {
    transition: {
      delayChildren: 3.5,
      staggerChildren: 0.7,
    },
  },
};

const BottomBoxes = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={boxVariants}
      className="flex justify-around md:justify-evenly absolute h-[6vh] md:h-[10vh] w-[80vw] left-1/2 -translate-x-1/2 bottom-8 z-50"
    >
      <BottomChildren>Best Service</BottomChildren>
      <BottomChildren>Responsive Technics</BottomChildren>
      <BottomChildren>Latest Technology</BottomChildren>
    </motion.div>
  );
};

export default BottomBoxes;
