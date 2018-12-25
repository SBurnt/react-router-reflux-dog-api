/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import actions from './actions';

function DogsListAllMiniItem(props) {
  // console.log('DogListMiniItem', props);
  return (
    <li className='li-block'>
      <p
        className='dog-name'
        onClick={() => {
          actions.getInfoListItem(props.data);
          props.history.push(`/breeds/${props.data}`);
        }}
      >
        {props.data}
      </p>
    </li>
  );
}

export default DogsListAllMiniItem;
