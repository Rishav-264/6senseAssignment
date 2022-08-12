import header from '../styles/header.module.css';

import { GrDocumentText } from 'react-icons/gr';

function Header() {
  return (
    <>
      <div className={header.parent}>
        <span className={header.item_one}>NARWHAL</span>
        <span className={header.item_two}>Teams</span>
        <img className={header.image} src="/john.svg" alt="profile" />
        <span className={header.item_three}>Hello, John</span>
        <span className={header.item_four}>
          <GrDocumentText />
        </span>
      </div>
    </>
  );
}

export default Header;
