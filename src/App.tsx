import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 2,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 3,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 4,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 5,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 6,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 7,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 8,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
    {
      id: 9,
      data: {
        url: "/img/BO6.jpg",
        title: "Call Of Duty",
      },
    },
  ]);

  return (
    <div className="flex flex-row max-w-screen min-h-screen bg-[#1c1c1f]">
      <Sidebar data={games} />
      <Main />
    </div>
  );
}

export default App;
