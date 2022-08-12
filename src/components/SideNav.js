import sidenav from '../styles/sidenav.module.css';

import { BiConversation } from 'react-icons/bi';
import { MdOutlineCorporateFare } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { BsGraphUp } from 'react-icons/bs';

function SideNav() {
  return (
    <div>
      <a href="#" className={sidenav.icon}>
        <img src="/Path.svg" />
      </a>
      <a href="#" className={sidenav.listItem}>
        <BiConversation />
      </a>
      <a href="#" className={sidenav.listItem}>
        <MdOutlineCorporateFare />
      </a>
      <a href="#" className={sidenav.listItem}>
        <GoPerson />
      </a>
      <a href="#" className={sidenav.listItem}>
        <BsGraphUp />
      </a>
    </div>
  );
}

export default SideNav;
