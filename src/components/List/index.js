import React from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item';

function List({ activities, updateActivity, title }) {
  console.log('List: ', activities, updateActivity, title);
  const detailId = useParams().id;
  console.log('detailId: ', detailId);
  return (
    <div>
      {detailId
        ? activities.map((activity) => {
            return activity.id == detailId ? (
              <Item
                activity={activity}
                updateActivity={updateActivity}
                key={activity.id}
              />
            ) : (
              ''
            );
          })
        : activities.map((activity) => {
            return activity.direction === 'inbound' && title === 'Inbox' ? (
              <Item
                activity={activity}
                updateActivity={updateActivity}
                key={activity.id}
              />
            ) : activity.direction === 'outbound' && title === 'Outbox' ? (
              <Item
                activity={activity}
                updateActivity={updateActivity}
                key={activity.id}
              />
            ) : activity.is_archived == true &&
              (title === 'Archive' || title === 'Settings') ? (
              <Item
                activity={activity}
                updateActivity={updateActivity}
                key={activity.id}
              />
            ) : activity.call_type === 'voicemail' && title === 'Voicemail' ? (
              <Item
                activity={activity}
                updateActivity={updateActivity}
                key={activity.id}
              />
            ) : title === 'Home' || title === 'AllCalls' ? (
              <Item
                activity={activity}
                updateActivity={updateActivity}
                key={activity.id}
              />
            ) : (
              ''
            );
          })}
    </div>
  );
}

export default List;
