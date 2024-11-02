import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-row w-screen min-h-screen bg-[#1c1c1f]">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
