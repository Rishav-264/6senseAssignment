import { useState } from 'react';
import app from './styles/app.module.css';

import SideNav from './components/SideNav';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import GridList from './components/GridList';

function App() {
  const [isAll, setAll] = useState(true);
  const [isFavourite, setFavourite] = useState(false);
  const [isArchived, setArchived] = useState(false);

  return (
    <>
      <div className={app.parent}>
        <div className={app.sidenav}>
          <SideNav />
        </div>
        <div className={app.content}>
          <Header />
          <HeaderTwo
            setAll={setAll}
            setFav={setFavourite}
            setArchived={setArchived}
          />
          <GridList isAll={isAll} isFav={isFavourite} isArchived={isArchived} />
        </div>
      </div>
    </>
  );
}

export default App;
