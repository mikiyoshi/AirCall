import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '../../components/List';

const ENDPOINT_URL =
  'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app';

// const activityApi = {
//   async getAll() {
//     const result = await axios.get(ENDPOINT_URL + '/activities');
//     console.log('getAll: ', result);
//     return result.data;
//   },
//   async post(todo) {
//     const result = await axios.post(ENDPOINT_URL + '/' + todo.id, todo);
//     return result.data;
//   },
// };
// activityApi.getAll();

const Home = ({ title }) => {
  const [activities, setActivities] = useState([]);
  const [reset, setReset] = useState();

  useEffect(() => {
    const getAll = async () => {
      const result = await axios.get(ENDPOINT_URL + '/activities');
      console.log('getAll: ', result.data);
      const newReset = result.data.some((activity) => {
        return activity.is_archived === true;
      });
      setReset(newReset);
      return setActivities(result.data);
    };
    getAll();
  }, [reset]);

  const updateActivity = (activity) => {
    const newActivities = activities.map((_activity) => {
      return _activity.id === activity.id
        ? { ..._activity, ...activity }
        : { ..._activity };
    });
    setActivities(newActivities);
  };

  const resetArchive = async () => {
    const result = await axios.get(ENDPOINT_URL + '/reset');
    setReset((prev) => !prev);
  };
  console.log('Activity reset: ', reset);
  return (
    <div>
      title: {title}
      <List
        activities={activities}
        updateActivity={updateActivity}
        title={title}
      />
    </div>
  );
};

export default Home;
