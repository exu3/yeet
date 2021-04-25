import HeadObject from "../components/head";
import LoginModal from "../components/LoginModal";

export default function Login() {
  return (
    <div className="bg-galaxy w-screen h-screen">
      <HeadObject />
      <main className="flex items-center justify-center">
        <div>
          <LoginModal />
        </div>
      </main>
    </div>
  );
}
