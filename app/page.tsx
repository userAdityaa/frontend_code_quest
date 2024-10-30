import { Navbar } from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen">
        <div className="w-[30vw] h-[30vh] absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-zinc-100 font-bold text-[46px] leading-relaxed">
          Master <span className="bg-[#fc7b97b5] p-[0.3rem]">Coding</span>
          <br />
          Through <span className="bg-[#6266d09c] p-[0.3rem]">Play</span>,
          <br />
          <span className="bg-[#5b9f51c6] p-[0.3rem]">Everywhere</span>
        </div>
      </div>
    </>
  );
}