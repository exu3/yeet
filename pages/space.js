import HeadObject from "../components/head";
import TopBar from "../components/TopBar";
import { BsBoxArrowUpRight, BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Space() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-galaxy w-screen h-screen overflow-hidden">
      <HeadObject />
      <main>
        <section>
          <div>
            <TopBar />
          </div>
        </section>
        <motion.img
          src="/rocket.svg"
          alt="rocket"
          className="relative z-50 w-12 h-12"
          initial={{ opacity: 1, x: -200 }}
          animate={{ opacity: 1, x: 2000 }}
          transition={{ duration: 10 }}
        />
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
            <div className="relative z-50">
              <motion.img
                src="/astronaut.svg"
                alt="Astronaut"
                className="items-center absolute right-40 md:right-64 z-40"
                animate={{
                  y: [-15, 15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <button
                onClick={() => setShowModal(true)}
                className="text-white text-xl flex flex-row items-center space-x-2 font-bold px-3 py-1 bg-blue rounded-xl relative z-50"
              >
                <p>Yeet me</p>
                <BsBoxArrowUpRight />
              </button>
            </div>

            {/** MODALSDKJFLSDKFJ */}
            {showModal ? (
              <div className="max-w-xl max-h-96 bg-blue rounded-lg text-white font-rubik z-50 fixed mx-auto my-auto inset-0 px-12 py-14">
                <motion.div
                  onClick={() => setShowModal(false)}
                  className="float-right cursor-pointer"
                  whileHover={{ rotate: 90 }}
                >
                  <IoClose size={30} />
                </motion.div>
                <div className="flex flex-col space-y-5 mb-8">
                  <h2 className="font-bold text-3xl">
                    You are about to be yeeted into space.
                  </h2>
                  <p>
                    By clicking the button below, you assume responsibility for
                    all consequences.
                  </p>
                </div>
                <button
                  onClick={() => router.push("/yeeted")}
                  className="px-3 py-1 border-2 border-white rounded-lg flex flex-row w-auto"
                >
                  <p>
                    <em>Yeet me into space</em>
                  </p>
                  <BsArrowRight size={25} />
                </button>
              </div>
            ) : null}

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
