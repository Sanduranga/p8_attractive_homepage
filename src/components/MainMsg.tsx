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
      className="flex flex-col justify-between text-white items-start absolute left-20 h-[50vh] top-20 max-w-screen-sm  w-full"
    >
      <div className="text-5xl font-bold tracking-widest">
        <h1>Your Complete</h1>
        <h1>Digital Solutions</h1>
        <h1>Provider</h1>
      </div>
      <div>
        <p className="text-2xl uppercase">
          Lorem ipsum dolor sit amet consecttur, adipisicing elit.
        </p>
      </div>
      <div className=" flex justify-center items-center text-2xl border-yellow-500  h-[8vh]  text-yellow-500 border-2 w-[20vw] hover:border-yellow-500 hover:border-4 hover:text-yellow-500 hover:font-bold ">
        Explore
      </div>
    </motion.div>
  );
};

export default MainMsg;
