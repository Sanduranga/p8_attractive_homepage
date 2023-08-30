import { motion } from "framer-motion";

const MainMsg = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 3,
        duration: 2,
      }}
      className="flex flex-col object-cover justify-between md:text-white text-black items-start absolute left-20 md:left-20 md:h-[50vh] md:top-20 bottom-32 w-[75vw] h-[32vh]"
    >
      <div className="md:text-5xl text-3xl font-bold tracking-widest">
        <h1>Your Complete</h1>
        <h1>Digital Solutions</h1>
        <h1>Provider</h1>
      </div>
      <div>
        <p className="text-lg md:text-2xl uppercase">
          Lorem ipsum dolor sit amet consecttur, adipisicing elit.
        </p>
      </div>
      <div className="flex justify-center items-center text-2xl border-yellow-500 h-[6vh]  md:h-[8vh]  text-yellow-500 border-2 w-[20vw] hover:border-yellow-500 hover:border-4 hover:text-yellow-500 hover:font-bold ">
        Explore
      </div>
    </motion.div>
  );
};

export default MainMsg;
