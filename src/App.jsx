import './App.css';
import Sidebar from './components/Sidebar';
import CVArea from './components/CVArea';

function App() {

  return (
    <>
      <aside className="sideBar">
      <Sidebar/>
      </aside>
      <main className="CVArea">
      <CVArea/>
      </main>
    </>
  )
}

export default App;
