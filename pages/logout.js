import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Logout() {
  return (
    <div className="bg-galaxy w-screen h-screen overflow-hidden">
      <div className="fixed inset-0 mx-auto my-auto bg-blue rounded-lg p-12 text-center w-full md:w-96 h-96 text-white font-rubik">
        <h2 className="text-4xl font-bold">Successfully logged out.</h2>
        <div className="mt-8 text-2xl text-lightGray flex flex-row justify-center items-center">
          <Link href="/login">
            <a className="flex flex-row underline">
              Log back in. <BsArrowRight />
            </a>
          </Link>
        </div>
        <motion.img
          src="/astronaut.svg"
          alt="Astronaut"
          className="mx-auto mt-8 w-24 h-24"
          animate={{
            y: [-15, 15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <motion.img
        src="/rocket.svg"
        alt="rocket"
        className="relative z-50 w-48 h-48 mt-48"
        initial={{ opacity: 1, x: -200, y: -10 }}
        animate={{ opacity: 1, x: 2000 }}
        transition={{ duration: 5 }}
      />
    </div>
  );
}
