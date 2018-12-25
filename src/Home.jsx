import React, { Component } from 'react';
import axios from 'axios';

import './css/App.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      imgHome: '',
    };
  }

  componentDidMount() {
    // console.log('компонента УЖЕ вмонтирована', this.state);
    const urlAll = `https://dog.ceo/api/breeds/image/random`;

    axios.get(urlAll).then(result => {
      // console.log('axios Home', result);
      this.setState({ imgHome: result.data.message });
    });
  }

  render() {
    // console.log('Home img', this.state.imgHome);

    return (
      <div className='home-page'>
        <h1 className='startInfo'>Добро пожаловать на сайт фотографий собак</h1>
        <img src={this.state.imgHome} alt='pikcha dog' />
      </div>
    );
  }
}

export default Home;
