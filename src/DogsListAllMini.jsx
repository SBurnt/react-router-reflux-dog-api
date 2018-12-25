/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Reflux from 'reflux';
import Store from './Store';

import actions from './actions';
import './css/dogsListAllMini.css';

class DogsListAllMini extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = Store;
    this.storeKeys = ['dogsListAllMini'];
  }

  componentDidMount() {
    actions.getInfoListBreedsAll();
  }

  render() {
    const { dogsListAllMini } = this.state;
    // console.log('dogsListAllMini', dogsListAllMini);

    if (dogsListAllMini.length === 0) {
      return <p className='startInfo'>Список собак пуст</p>;
    }

    const breedsList = Object.keys(dogsListAllMini);
    // console.log('breedsList', breedsList);

    return (
      <aside className='dogListAllMini'>
        {breedsList.map((item, index) => (
          <li className='li-block' key={index}>
            <p
              className='dog-name'
              onClick={() => {
                actions.getInfoListItem(item);
                // eslint-disable-next-line no-undef
                this.props.history.push(`/breeds/${item}`);
              }}
            >
              {item}
            </p>
          </li>
        ))}
      </aside>
    );
  }
}

export default DogsListAllMini;
