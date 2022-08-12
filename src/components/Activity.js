import activity from '../styles/activity.module.css';
import activities from '../data/Activities.json';
import ActivityItem from './ActivityItem';

function Activity() {
  return (
    <>
      <div className={activity.parent}>
        <div className={activity.header}>Activity</div>
        {activities.map(elem => {
          return (
            <ActivityItem
              imageUrl={elem.person.avatar}
              text={elem.text}
              target={elem.target}
              name={elem.person.name}
              time={elem.created_at}
            />
          );
        })}
      </div>
    </>
  );
}

export default Activity;
