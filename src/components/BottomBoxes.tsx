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
      className="flex justify-center items-center underline underline-offset-8 bg-gray-200 text-black py-3 text-lg px-3 rounded-md font-bold"
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
      className="grid grid-cols-3 gap-4 absolute h-[10vh] max-w-screen-lg bottom-6 z-50 left-1/2 -translate-x-1/2"
    >
      <BottomChildren>Best Service</BottomChildren>
      <BottomChildren>Responsive technics</BottomChildren>
      <BottomChildren>Latest Technology</BottomChildren>
    </motion.div>
  );
};

export default BottomBoxes;
