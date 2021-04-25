import { FiGithub, FiTwitter } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AuthModal() {
  const router = useRouter();
  return (
    <div className="font-rubik bg-blue w-11/12 md:w-full text-white p-8 items-center rounded-lg mt-16">
      <div className="text-center mt-4 mb-8">
        <h1 className="text-5xl font-bold">Register</h1>
        <p className="text-lightGray">
          Already have an account?{" "}
          <span>
            <Link href="/login">
              <a className="underline">Sign in.</a>
            </Link>
          </span>
        </p>
      </div>
      <div className="mx-12 space-y-2">
        <div>
          <label for="username">Create username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="p-1 rounded-lg w-full text-black"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            placeholder="Email"
            type="text"
            id="email"
            className="p-1 rounded-lg w-full text-black"
          />
        </div>
        <div>
          <label for="password">Create password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-1 rounded-lg w-full text-black mb-5"
          />
        </div>
        <button
          onClick={() => router.push("/login")}
          className="text-blue bg-white rounded-lg px-2 py-1 flex mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Create account
        </button>
      </div>
      <div className="my-4 text-center space-y-5">
        <p>———— OR ————</p>
        <p>Sign up with</p>
        <div className="flex flex-row space-x-3 justify-center">
          <FiGithub size={30} />
          <FiTwitter size={30} />
          <RiDiscordLine size={30} />
        </div>
      </div>
    </div>
  );
}
