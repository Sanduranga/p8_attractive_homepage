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
      className="absolute w-[17vw] h-[50vh] top-[25vh] z-50 right-[15vw]"
    >
      <motion.div
        variants={imgAnimation}
        custom={0}
        className="absolute w-[17vw] h-[50vh] -left-[10vw] border-black border-2"
      >
        <img
          className=" absolute object-cover"
          src="./1_frame.jpg"
          alt="img_1"
        />
      </motion.div>
      <motion.div
        variants={imgAnimation}
        custom={1}
        className="absolute object-cover w-[17vw] h-[50vh] border-black border-2"
      >
        <img src="./2_frame.jpg" alt="img_2" />
      </motion.div>
      <motion.div
        variants={imgAnimation}
        custom={2}
        className="absolute object-cover w-[17vw] h-[50vh] left-[10vw] border-black border-2"
      >
        <img src="./3_frame.jpg" alt="img_3" />
      </motion.div>
      {/* <div className="bg-green-900 absolute left-0 bottom-0 h-20 w-20"></div>
        <div className="bg-purple-500 h-20 w-20"></div>
        <div className="bg-blue-800 h-20 w-20"></div> */}
    </motion.div>
  );
};

export default Images;
