import { Home, Notification, Library, Store, Download } from "./icons";

type SidebarProps = {};

const Sidebar = ({}: SidebarProps) => {
  return (
    <aside className="sticky top-0 left-0 min-w-64 max-h-screen bg-[#101114] p-2 text-white z-20">
      <div className="w-full h-[91%]">
        <div className="flex flex-row h-12 w-full">
          <div className="flex flex-row items-center p-2 h-full min-w-[85%] max-w-[85%] rounded-lg hover:bg-[#404143]">
            <img
              src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Jane"
              className="w-8 h-8 bg-red-600 rounded-full"
            ></img>
            <div className="flex flex-col ml-1">
              <span className="font-bold text-sm">Janesilla</span>
              <span className="text-black bg-white px-1 text-xs">PC GAMES</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full min-w-[15%] max-w-[15%] rounded-lg hover:bg-[#404143]">
            <Notification customStyle="fill-white h-auto w-6" />
          </div>
        </div>

        <ul className="flex flex-col justify-center text-sm mt-4">
          <li className="flex flex-row px-2 items-center h-12 w-full hover:bg-[#404143] rounded-lg">
            <Home customStyle="fill-white h-auto w-7" />
            <span className="ml-3">Game Pass</span>
          </li>
          <li className="flex flex-row px-2 items-center h-12 w-full hover:bg-[#404143] rounded-lg">
            <Library customStyle="fill-white h-auto w-7" />
            <span className="ml-3">My Library</span>
          </li>
          <li className="flex flex-row px-2 items-center h-12 w-full hover:bg-[#404143] rounded-lg">
            <Store customStyle="fill-white h-auto w-7" />
            <span className="ml-3">Store</span>
          </li>
        </ul>

        <select className="px-2 w-full rounded-lg h-8 border-[#404143] border-[1px] bg-black text-sm mt-4">
          <option value="1">Installed {"(1)"}</option>
        </select>

        <div className="max-h-[38rem] min-w-full mt-2 text-black overflow-y-scroll">
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
        </div>
      </div>
      <div className="flex flex-row items-center w-full h-[9%] hover:bg-[#404143] rounded-lg px-3">
        <Download customStyle="w-8 h-8 fill-white" />
        <div className="flex flex-col justify-center ml-3">
          <span className="font-bold text-sm">Show Queue</span>
          <span className="text-xs text-slate-300">
            Manage recent installations
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const GameItem = () => {
  return (
    <div className="flex flex-row hover:bg-[#404143] h-20 rounded-lg p-2">
      <img
        src="https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg?fm=png&fl=png8"
        className="h-full min-w-16"
      ></img>
      <div className="w-full p-1">
        <span className="font-bold text-sm text-white">Call Of Duty</span>
      </div>
    </div>
  );
};
