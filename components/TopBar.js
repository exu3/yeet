import Link from "next/link";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <div className="font-rubik text-white font-bold flex justify-between flex-row mx-20 pt-12">
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl"
        >
          Welcome!
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
  );
}
