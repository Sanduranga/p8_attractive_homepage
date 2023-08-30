import { motion } from "framer-motion";

const BgAnnimation = () => {
  return (
    <>
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "100vw",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className=" bg-gradient-to-b from-gray-100 to to-gray-300 h-screen z-0 absolute left-0 top-0 "
      ></motion.div>

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "100vw",
        }}
        transition={{
          delay: 0.9,
          ease: "easeInOut",
          duration: 0.9,
        }}
        className="bottom-0 left-0 h-[20vh] absolute z-10 border-t-4 border-gray-300  bg-gradient-to-r from-gray-950 to to-gray-700"
      ></motion.div>

      <motion.div
        initial={{
          width: 0,
          rotateZ: 20,
        }}
        animate={{
          width: "75vw",
        }}
        transition={{
          delay: 1.5,
          ease: "easeInOut",
          duration: 0.8,
        }}
        className="-top-[50vh] -left-[30vw] h-[150vh] absolute bg-gradient-to-r from-gray-950 to to-gray-700"
      ></motion.div>
    </>
  );
};

export default BgAnnimation;
