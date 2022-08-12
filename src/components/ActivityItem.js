import React from 'react';
import activityItem from '../styles/activityitem.module.css';

function ActivityItem({ imageUrl, text, target, time, name }) {
  return (
    <>
      <div className={activityItem.parent}>
        <div className={activityItem.imageContainer}>
          <img src={imageUrl} alt="kind" />
        </div>
        <div className={activityItem.textContainer}>
          <p>
            <span>{name}</span> {text} <span>{target}</span>
          </p>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
}

export default ActivityItem;
