/* eslint-disable react/no-array-index-key */
import React from 'react';
import Reflux from 'reflux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './css/dogSearchMini.css';

import Store from './Store';

class DogSearchMini extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = Store;
    this.storeKeys = ['dogSearchMini'];
  }

  render() {
    const { dogSearchMini } = this.state;

    // console.log('dogSearchMini', this.props);

    if (dogSearchMini.length === 0) {
      return (
        <div className='startInfo'>Выбирите породу собаки из списка либо введите в поиске</div>
      );
    }

    // const filterArr = dogSearchMini.filter((item, index) => index % 10 === 0);
    // console.log('filterArr', filterArr);

    return (
      <div className='dogSearchMini'>
        <h2 className='dogSearchMini-title'>{this.props.match.params.breed}</h2>
        <ul className='dogSearchMini-list'>
          {dogSearchMini.map((item, index) => (
            <li className='img-block' key={index}>
              <LazyLoadImage src={item} alt='pikcha dog' />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DogSearchMini;
