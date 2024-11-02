import { LeftIcon } from "./icons";

type MainProps = {};

const Main = ({}: MainProps) => {
  return (
    <main className="flex flex-col flex-grow min-w-0 items-center text-white px-4 py-5">
      <img
        className="z-0 absolute left-0 w-screen h-80 blur-2xl"
        src="public/img/back.jpg"
      />
      <div className="flex flex-col items-center justify-center w-full z-10">
        <div className="w-full flex flex-row justify-between">
          <button className="bg-[#101114] w-7 h-7 rounded-lg hover:bg-gray-800">
            <LeftIcon customStyle="h-auto w-auto fill-white" />
          </button>
          <input
            placeholder="Search for Games, add-ons, and more"
            className="flex items-center w-96 h-7 bg-[#101114]
         rounded-full px-3 text-sm text-gray-300 border-[1px] border-[#404143]"
          />
          <div className="w-10 h-10 bg-transparent"></div>
        </div>

        <div className="flex flex-col gap-4 w-[85%] mt-5">
          <h1 className="text-5xl font-semibold">Game Pass</h1>
          <h2 className="text-xl font-semibold">What's happening</h2>
        </div>

        <div className="flex flex-col gap-4 w-[85%] h-96 mt-5">
          {/* 
            Gallery
          */}
          <div className="min-w-0 min-h-60 overflow-hidden no-scrollbar">
            <div className="flex flex-row w-full h-full gap-3 justify-between overflow-x-scroll no-scrollbar">
              <div className="min-w-[500px] h-60 bg-black hover:border-2 rounded-lg"></div>
              <div className="min-w-[500px] h-60 bg-black hover:border-2 rounded-lg"></div>
              <div className="min-w-[500px] h-60 bg-black hover:border-2 rounded-lg"></div>
              <div className="min-w-[500px] h-60 bg-black hover:border-2 rounded-lg"></div>
              <div className="min-w-[500px] h-60 bg-black hover:border-2 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <button className="w-2 h-2 rounded-full bg-white"></button>
            <button className="w-2 h-2 rounded-full bg-white"></button>
            <button className="w-2 h-2 rounded-full bg-white"></button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
