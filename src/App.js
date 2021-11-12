import Drawer from './components/drawer';
import HeaderMenu from './components/headerMenu';
import './App.css';
import NoteList from './components/noteList';
function App() {
  
  return (
    <div className="App">
        <div className="mainWrapper">
           <Drawer />
           <HeaderMenu />
           <NoteList />
        </div>
    </div>
  );
}

export default App;
