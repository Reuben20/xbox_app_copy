import { Home, Notification, Library, Store, Download } from "./icons";

type SidebarProps = {
  data: { id: number; data: { url: string; title: string } }[];
};

const Sidebar = ({ data }: SidebarProps) => {
  return (
    <aside className="sticky top-0 left-0 min-w-64 max-h-screen bg-[#101114] p-2 text-white z-20">
      <div className="max-w-full min-h-full">
        <Profile />

        <List />

        <Select />

        <div className="flex flex-col justify-between min-h-[calc(100vh-29vh)] max-h-[calc(100vh-29vh)] w-full">
          <ul className="w-full max-h-auto mt-2 mb-2 overflow-y-scroll">
            {data.map((item, index) => (
              <GameItem
                key={index}
                title={item.data.title}
                url={item.data.url}
              />
            ))}
          </ul>

          <div className="flex flex-row items-center w-full min-h-20 hover:bg-[#404143] rounded-lg px-3">
            <Download customStyle="w-8 h-8 fill-white" />
            <div className="flex flex-col justify-center ml-3">
              <span className="font-bold text-sm">Show Queue</span>
              <span className="text-xs text-slate-300">
                Manage recent installations
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

type GameItemProps = {
  title: string;
  url: string;
};

const GameItem = ({ title, url }: GameItemProps) => {
  return (
    <li>
      <div className="flex flex-row hover:bg-[#404143] h-20 rounded-lg p-2 text-white">
        <img src={url} className="h-full min-w-16" />
        <div className="w-full pl-2">
          <span className="font-bold text-sm text-white">{title}</span>
        </div>
      </div>
    </li>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-row max-h-12 w-full">
      <div className="flex flex-row items-center p-2 h-full min-w-[85%] max-w-[85%] rounded-lg hover:bg-[#404143]">
        <img
          src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Jane"
          className="w-8 h-8 bg-red-600 rounded-full"
        />
        <div className="flex flex-col ml-1">
          <span className="font-bold text-sm">Janesilla</span>
          <span className="text-black bg-white px-1 text-xs">PC GAMES</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-full min-w-[15%] max-w-[15%] rounded-lg hover:bg-[#404143]">
        <Notification customStyle="fill-white h-auto w-6" />
      </div>
    </div>
  );
};

const List = () => {
  return (
    <ul className="flex flex-col justify-center text-sm mt-4 w-full">
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
  );
};

const Select = () => {
  return (
    <select className="px-2 w-full rounded-lg min-h-8 max-h-8 border-[#404143] border-[1px] bg-black text-sm mt-4">
      <option value="1">Installed {"(1)"}</option>
      <option value="1">Installed {"(1)"}</option>
      <option value="1">Installed {"(1)"}</option>
      <option value="1">Installed {"(1)"}</option>
      <option value="1">Installed {"(1)"}</option>
    </select>
  );
};
