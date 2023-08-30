import { motion } from "framer-motion";

const Images = () => {
  const imgVariants = {
    animate: {
      transition: {
        delayChildren: 2,
        staggerChildren: 0.4,
      },
    },
  };

  const imgAnimation = {
    initial: {
      x: 200,
      y: 0,
      opacity: 0,
    },
    animate: (custom: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      rotateZ: custom === 0 ? -20 : custom === 1 ? 0 : 20,
    }),
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={imgVariants}
      className="absolute w-[23vw] h-[55vh] top-[20vh] z-50 left-[40vw]"
    >
      <motion.img
        variants={imgAnimation}
        custom={0}
        className="absolute object-cover -left-[10vw] border-black border-2"
        src="./1_frame.jpg"
        alt="img_1"
      />

      <motion.img
        variants={imgAnimation}
        custom={1}
        className="absolute object-cover border-black border-2"
        src="./2_frame.jpg"
        alt="img_2"
      />

      <motion.img
        variants={imgAnimation}
        custom={2}
        className="absolute object-cover left-[10vw] border-black border-2"
        src="./3_frame.jpg"
        alt="img_3"
      />

      {/* <div className="bg-green-900 absolute left-0 bottom-0 h-20 w-20"></div>
        <div className="bg-purple-500 h-20 w-20"></div>
        <div className="bg-blue-800 h-20 w-20"></div> */}
    </motion.div>
  );
};

export default Images;
