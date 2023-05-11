import React from 'react';

function NumberKey() {
  return (
    <div className="container-view align-middle">
      <div className="row justify-content-around h1 py-5">
        <p className="badge text-bg-secondary col-4">1</p>
        <p className="badge text-bg-secondary col-4">2</p>
        <p className="badge text-bg-secondary col-4">3</p>
        <p className="badge text-bg-secondary col-4">4</p>
        <p className="badge text-bg-secondary col-4">5</p>
        <p className="badge text-bg-secondary col-4">6</p>
        <p className="badge text-bg-secondary col-4">7</p>
        <p className="badge text-bg-secondary col-4">8</p>
        <p className="badge text-bg-secondary col-4">9</p>
        <p className="badge text-bg-secondary col-4">*</p>
        <p className="badge text-bg-secondary col-4">0</p>
        <p className="badge text-bg-secondary col-4">#</p>
        <p className="badge text-bg-success col-4">
          <i className="bi bi-telephone-fill"></i>
        </p>
      </div>
    </div>
  );
}

export default NumberKey;
