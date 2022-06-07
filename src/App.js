// Import components
import Searchbar from './searchbar.js';
import Directory from './directory.js';
import Gallery from './gallery/gallery.js';
import Sidebar from './sidebar/sidebar.js';
import './App.css';

function App(){
  return (
    <div className='App'>
      <Searchbar />
      <Directory />
      <Gallery />
      <Sidebar />
    </div>
  );
}

export default App;
