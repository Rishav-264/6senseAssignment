import headerTwo from '../styles/headertwo.module.css';
import { MdOutlineCorporateFare } from 'react-icons/md';

function HeaderTwo({ setAll, setFav, setArchived }) {
  const handleAll = () => {
    setAll(true);
    setFav(false);
    setArchived(false);
  };

  const handleFav = () => {
    setAll(false);
    setFav(true);
    setArchived(false);
  };

  const handleArchived = () => {
    setAll(false);
    setFav(false);
    setArchived(true);
  };

  return (
    <>
      <div className={headerTwo.row}>
        <div className={headerTwo.icon}>
          <MdOutlineCorporateFare />
        </div>
        <div className={headerTwo.text}>Teams</div>
        <div className={headerTwo.button}>
          <a href="#">Create New Team</a>
        </div>
      </div>
      <div className={headerTwo.rowTwo}>
        <div className={headerTwo.tablist}>
          <a href="#" className={headerTwo.tab} onClick={handleAll}>
            All
          </a>
          <a href="#" className={headerTwo.tab} onClick={handleFav}>
            Favourites
          </a>
          <a href="#" className={headerTwo.tab} onClick={handleArchived}>
            Archived
          </a>
        </div>
      </div>
    </>
  );
}

export default HeaderTwo;
