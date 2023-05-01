import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '../List';

// const ENDPOINT_URL =
//   'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app';

const ENDPOINT_URL = process.env.REACT_APP_DATABASE_URL;

// console.log('ENDPOINT_URL', ENDPOINT_URL);

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

const Activity = ({ title }) => {
  const [activities, setActivities] = useState([]);
  const [reset, setReset] = useState();
  console.log('ENDPOINT_URL', ENDPOINT_URL);
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
    const result = await axios.patch(ENDPOINT_URL + '/reset');
    setReset((prev) => !prev);
  };
  console.log('Activity reset: ', reset);
  return (
    <div className="container-view">
      <main className="flex-shrink-0">
        <div className="">
          <div
            className="alert alert-light border border-secondary d-flex justify-content-between"
            role="alert"
          >
            <div className="h2 m-0">
              <i class="bi bi-archive-fill"></i>
            </div>

            <div>
              <strong className="h6">{title}</strong>
            </div>
          </div>
          {title === 'Settings' ? (
            reset === true ? (
              <div className="d-grid mb-3">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={resetArchive}
                >
                  Reset Archive
                </button>
              </div>
            ) : (
              ''
            )
          ) : (
            ''
          )}
          <List
            activities={activities}
            updateActivity={updateActivity}
            title={title}
          />
        </div>
      </main>
    </div>
  );
};

export default Activity;
