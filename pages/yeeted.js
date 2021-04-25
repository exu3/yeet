import HeadObject from "../components/head";
import TopBar from "../components/TopBar";
import { BsBoxArrowUpRight, BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Yeeted() {
  return (
    <div className="bg-galaxy w-screen h-screen overflow-hidden">
      <HeadObject />
      <main>
        <section>
          <div>
            <div className="font-rubik text-white font-bold flex justify-between flex-row mx-20 pt-12">
              {/** this is the top bar thing */}
              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-4xl md:text-5xl"
                >
                  Yeet
                </motion.h1>
              </div>
              <div>
                <Link href="/logout">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, color: "#67f6e7" }}
                    className="border-2 px-2 py-1 bg-black border-white rounded-lg underline font-semibold text-xl md:text-2xl relative z-50"
                  >
                    <a>Log out</a>
                  </motion.button>
                </Link>
              </div>
            </div>
            {/** i copy pasted the top bar thing manually bc i didn't have time to make it a prop to omit the welcome message and only show the button */}
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols- md:grid-rows-2 lg:grid-cols-4">
            <div>
              <motion.img
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 25, scale: 1.1 }}
                src="/earth.svg"
                alt="Earth"
                className="absolute bottom-10"
              />
            </div>
            <div className="relative z-50"></div>
            <motion.img
              src="/astronaut.svg"
              alt="star"
              className="relative z-50 w-48 h-48 "
              initial={{ opacity: 1, x: -1000 }}
              animate={{ opacity: 1, x: 2000, rotate: 360 }}
              transition={{ duration: 5 }}
            />
            <div>
              <motion.img
                src="/marble.svg"
                alt="Marble planet"
                className="absolute top-10"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  rotate: 100,
                  scale: 1.1,
                }}
              />
            </div>
            <div>
              <motion.img
                src="/saturn.svg"
                alt="Saturn"
                className="absolute right-96 bottom-20"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 25, scale: 1.1 }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
