import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button';
import Detail from '../Detail';

// const ENDPOINT_URL =
//   'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app';

const ENDPOINT_URL = process.env.REACT_APP_DATABASE_URL;

function Item({ activity, updateActivity }) {
  console.log('Item: ', activity, updateActivity);
  const detailId = useParams().id;

  const changeArchive = async () => {
    const newActivity = { ...activity, is_archived: !activity.is_archived };
    const result = await axios.post(
      ENDPOINT_URL + '/activities/' + activity.id,
      newActivity
    );
    updateActivity(result.data);
  };

  return detailId ? (
    <div className="row">
      <div className="container-fluid text-center d-grid gap-3">
        <div className="display-1">
          {activity.call_type === 'answered' ? (
            <i className="bi bi-telephone-inbound-fill text-success"></i>
          ) : activity.call_type === 'voicemail' ? (
            <i class="bi bi-voicemail"></i>
          ) : (
            <i class="bi bi-telephone-x-fill text-danger"></i>
          )}
        </div>
        <div>
          <strong className="h3">
            <span className="fw-bold">From: </span>
            {activity.from}
          </strong>
          <p className="h3">
            {activity.call_type === 'answered'
              ? `for ${activity.to}`
              : activity.call_type === 'voicemail'
              ? 'voice mail'
              : `tried to call on ${activity.to}`}
          </p>
        </div>
        <div className="btn btn-primary">
          <i class="bi bi-telephone-fill"></i> Call
        </div>
        {activity.call_type === 'voicemail' ? (
          <div className="btn btn-primary">
            <i class="bi bi-voicemail"></i> Voicemail
          </div>
        ) : (
          ''
        )}

        <div className="card text-start mb-1">
          <div className="card-body">
            <p>
              <span className="fw-bold">Time: </span>
              {new Date(activity.created_at)
                .toLocaleTimeString()
                .split(':')
                .slice(0, 2)
                .join(':')}{' '}
              <span className="badge bg-info text-bg-secondary">
                {new Date(activity.created_at)
                  .toLocaleTimeString()
                  .split(':')
                  .slice(2, 3)[0]
                  .includes(' AM')
                  ? 'AM'
                  : 'PM'}
              </span>
            </p>
            <p className="">
              <span className="fw-bold">Date: </span>
              {new Date(activity.created_at).toDateString()}
            </p>
            <p className="">
              <span className="fw-bold">Call Type: </span>
              {activity.call_type}
            </p>
            <p className="">
              <span className="fw-bold">Direction: </span>
              {activity.direction}
            </p>
            <p className="">
              <span className="fw-bold">Duration: </span>
              {activity.duration}
            </p>
            <p className="">
              <span className="fw-bold">Via: </span>
              {activity.via}
            </p>
            <p className="m-0">
              <span className="fw-bold">Archived: </span>
              {activity.is_archived ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Button
            key={activity.id}
            activity={activity}
            changeArchive={changeArchive}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="card mb-3" key={activity.id}>
      <Link to={`/Detail/${activity.id}`} component={Detail}>
        <div className="card-header text-center">
          {new Date(activity.created_at)
            .toLocaleTimeString()
            .split(':')
            .slice(0, 2)
            .join(':')}{' '}
          <span className="badge bg-info text-bg-secondary">
            {new Date(activity.created_at)
              .toLocaleTimeString()
              .split(':')
              .slice(2, 3)[0]
              .includes(' AM')
              ? 'AM'
              : 'PM'}
          </span>{' '}
          {new Date(activity.created_at).toDateString()}
        </div>

        <div className="card-body d-flex justify-content-between">
          <div className="col h2">
            {activity.call_type === 'answered' ? (
              <i className="bi bi-telephone-inbound-fill text-success"></i>
            ) : activity.call_type === 'voicemail' ? (
              <i class="bi bi-voicemail"></i>
            ) : (
              <i class="bi bi-telephone-x-fill text-danger"></i>
            )}
          </div>
          <div className="col-10">
            <strong className="h6">{activity.from}</strong>
            <p className="mb-0">
              {activity.call_type === 'answered'
                ? `for ${activity.to}`
                : activity.call_type === 'voicemail'
                ? 'voice mail'
                : `tried to call on ${activity.to}`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
