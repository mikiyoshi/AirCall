import React from 'react';

function Button({ activity, changeArchive }) {
  return activity.is_archived ? (
    <button type="button" class="btn btn-danger" onClick={changeArchive}>
      Delete Archive
    </button>
  ) : (
    <button type="button" class="btn btn-success" onClick={changeArchive}>
      Add Archive
    </button>
  );
}

export default Button;
