import React, { useState, useEffect } from 'react';
import gridList from '../styles/gridlist.module.css';
import jsonData from '../data/Data.json';

import Card from './Card';
import Activity from './Activity';

function GridList({ isAll, isFav, isArchived }) {
  const [data, setData] = useState(jsonData);
  useEffect(() => {
    if (isAll) {
      setData(jsonData);
    }
    if (isFav) {
      let temp = [];
      jsonData.forEach(elem => {
        if (elem.is_favorited) {
          temp.push(elem);
        }
      });
      setData(temp);
    }
    if (isArchived) {
      let temp2 = [];
      console.log('entered');
      jsonData.forEach(elem => {
        if (elem.is_archived) {
          temp2.push(elem);
        }
      });
      setData(temp2);
    }
  }, [isAll, isFav, isArchived]);
  return (
    <>
      <div className={gridList.parentContainer}>
        <div className={gridList.parent}>
          {data.map(elem => {
            return (
              <Card
                imageUrl={elem.image}
                name={elem.name}
                date={elem.created_at}
                description={elem.description}
                campaign={elem.campaigns_count}
                lead={elem.leads_count}
                favourite={elem.is_favorited}
                archive={elem.is_archived}
              />
            );
          })}
        </div>
        <div className={gridList.activityContainer}>
          <Activity />
        </div>
      </div>
    </>
  );
}

export default GridList;
