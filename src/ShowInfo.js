import React from 'react';

const ShowInfo = (props) => {
  return (
    <>
      <div>{props.data.Title}</div>
      <p>{props.data.Actors}</p>
    </>
  )
}


export default ShowInfo;
