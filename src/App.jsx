// import './App.css';
import { useState } from 'react';
import { ShortInfo, Navigation, MainBlocks, Links } from './components';
import { blockNames } from './constants';

function App() {
  const [activeItem, setActiveItem] = useState(blockNames[Object.keys(blockNames)[0]]);

  return (
    <div className="App">
      <Links />
      <div className="container">

        <div className="left">
          <ShortInfo />
          <Navigation items={blockNames} activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>

        <div className="right">
          <MainBlocks activeItem={activeItem} />
        </div>
      </div>
    </div>
  );
}

export default App;