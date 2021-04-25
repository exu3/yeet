export default function TopBar() {
  return (
    <div className="font-rubik text-white font-bold flex justify-between flex-row mx-20 pt-12">
      <div>
        <h1 className="text-4xl md:text-5xl">Welcome!</h1>
      </div>
      <div>
        <button className="border-2 px-2 py-1 bg-black border-white rounded-lg underline font-semibold text-xl md:text-2xl">
          Log out
        </button>
      </div>
    </div>
  );
}
