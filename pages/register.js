import AuthModal from "../components/AuthModal";
import HeadObject from "../components/head";

export default function Register() {
  return (
    <div className="bg-galaxy w-screen h-screen">
      <HeadObject />
      <main className="flex items-center justify-center">
        <div>
          <AuthModal />
        </div>
      </main>
    </div>
  );
}
