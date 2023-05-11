import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '../List';

const ENDPOINT_URL = process.env.REACT_APP_DATABASE_URL;

const Activity = ({ title }) => {
  const [activities, setActivities] = useState([]);
  const [reset, setReset] = useState();
  // console.log('ENDPOINT_URL', ENDPOINT_URL);
  useEffect(() => {
    const getAll = async () => {
      const result = await axios.get(ENDPOINT_URL + '/activities');
      // console.log('getAll: ', result.data);
      const newReset = result.data.some((activity) => {
        if (activity.from !== undefined && activity.to !== undefined) {
          return activity.is_archived === true;
        }
      });
      setReset(newReset);
      // console.log('newReset', newReset);
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
    console.log('resetArchive');
  };
  // console.log('Activity reset: ', reset);

  const archiveAllCalls = async () => {
    const result = await axios.get(ENDPOINT_URL + '/activities');
    // console.log('allCall: ', result.data);

    // async await can't use in async function
    archiveEachCall(result.data);
  };

  const archiveEachCall = async (activities) => {
    // console.log('activities', activities);
    const newActivities = activities.map(async (activity) => {
      if (activity.from !== undefined && activity.to !== undefined) {
        // console.log('activity.call_type', activity.call_type);
        const newActivity = { ...activity, is_archived: true };
        const eachResult = await axios.patch(
          ENDPOINT_URL + '/activities/' + activity.id,
          newActivity
        );
        // updateActivity(eachResult.data);
      }
    });

    // when update 'reset' state, one time rendering by useEffect
    resetArchive();
  };
  return (
    <div className="container-view">
      <main className="flex-shrink-0">
        <div className="">
          <div
            className="alert alert-light border border-secondary d-flex justify-content-between"
            role="alert"
          >
            <div className="h2 m-0">
              <i className="bi bi-archive-fill"></i>
            </div>

            <div>
              <strong className="h6">{title}</strong>
            </div>
          </div>
          {title === 'Settings' && reset === true ? (
            <div className="d-grid mb-3">
              <button
                type="button"
                className="btn btn-success"
                onClick={resetArchive}
              >
                Reset Archive
              </button>
            </div>
          ) : title === 'Home' ? (
            <div className="d-grid mb-3">
              {reset ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={resetArchive}
                >
                  Reset Archive
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={archiveAllCalls}
                >
                  Archive All Calls
                </button>
              )}
            </div>
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
