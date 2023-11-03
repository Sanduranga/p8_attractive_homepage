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
      className="flex flex-col object-cover md:gap-8 gap-3 md:text-white text-black items-start absolute left-20 md:left-20 md:h-[50vh] md:top-20 bottom-20 w-[75vw] h-[32vh]"
    >
      <div className="md:text-3xl text- font-bold tracking-widest">
        <h1>Your Complete</h1>
        <h1>Digital Solutions</h1>
        <h1>Provider</h1>
      </div>
      <div>
        <p className="text-md md:text-md uppercase">Lorem ipsum dolor sit.</p>
      </div>
      <div className="md:text-lg text-md text-center border-yellow-500 h-[5vh] md:h-10  text-yellow-500 md:px-0 px-5 border-2 md:w-20 w-[25vw] hover:border-yellow-500 hover:border-4 hover:text-yellow-500 hover:font-bold cursor-pointer ">
        Explore
      </div>
    </motion.div>
  );
};

export default MainMsg;
