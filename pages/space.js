import HeadObject from "../components/head";
import TopBar from "../components/TopBar";

export default function Space() {
  return (
    <div className="bg-galaxy w-screen h-screen">
      <HeadObject />
      <main>
        <section>
          <div>
            <TopBar />
          </div>
        </section>
        <section>
          <div className="grid grid-flow-col grid-cols-3 gap-4">
            <div>row 1</div>
            <div>row 1</div>
            <div>row 1</div>
          </div>
        </section>
      </main>
    </div>
  );
}
