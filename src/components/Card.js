import card from '../styles/card.module.css';
import { AiFillStar } from 'react-icons/ai';
import { BiConversation } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';

function Card({
  imageUrl,
  name,
  date,
  description,
  campaign,
  lead,
  favourite,
  archive,
}) {
  return (
    <>
      <div className={archive ? card.parent_archive : card.parent}>
        <div className={card.header}>
          <div className={card.icon}>
            <img src={imageUrl} alt="kind" />
          </div>
          <div className={card.subHeader}>
            <span>{name}</span>
            <span>{date}</span>
          </div>
          <div className={favourite ? card.star_fav : card.star}>
            <AiFillStar />
          </div>
        </div>
        <div className={card.description}>
          <p>{description}</p>
        </div>
        <div className={card.footer}>
          <span>
            <BiConversation />
          </span>
          <span className={card.text}>{campaign} campaigns</span>
          <span>
            <GoPerson />
          </span>
          <span className={card.text}>{lead} leads</span>
        </div>
      </div>
    </>
  );
}

export default Card;
