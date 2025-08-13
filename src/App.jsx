import "./App.css";
import Sidebar from "./components/Sidebar";
import CVArea from "./components/CVArea";
import { useState } from "react";


function App() {

  const [fullName, setFullName] = useState("");

  function setName(name) {
    setFullName(name);
  }

  return (
    <>
      <aside className="sideBar">
        <Sidebar setName= {setName} fullName= {fullName} />
      </aside>
      <main className="CVArea">
        <CVArea fullName = {fullName} />
      </main>
    </>
  );
}

export default App;
