import Reflux from 'reflux';
import axios from 'axios';

import actions from './actions';

class Store extends Reflux.Store {
  constructor(props) {
    super(props);
    this.state = {
      dogsListAllMini: [],
      dogSearchMini: [],
      searchInput: '',
    };

    this.listenables = actions;
  }

  onGetInfoInput(e) {
    const valued = e.target.value;
    // console.log('valued onGetInfoInput', valued);
    this.setState({ searchInput: valued });
  }

  onGetInfoListBreedsAll() {
    // console.log('компонента УЖЕ вмонтирована', this.state);
    const urlAll = `https://dog.ceo/api/breeds/list/all`;
    axios.get(urlAll).then(result => {
      // console.log('axios onGetInfoListBreedsAll', result);
      this.setState({ dogsListAllMini: result.data.message });
    });
  }

  onGetInfoListItem(breed) {
    // console.log('valued onGetInfoListItem', breed);
    const urlDog = `https://dog.ceo/api/breed/${breed}/images`;
    axios
      .get(urlDog)
      .catch(error => error)
      .then(result => {
        // console.log('axios onGetInfoListItem', result);
        this.setState({ dogSearchMini: result.data.message });
      });
  }

  onGetInfoSearchInput() {
    // console.log('компонента УЖЕ вмонтирована', this.state);
    // console.log('searchInput in CompDid', this.state.searchInput);
    const urlDog = `https://dog.ceo/api/breed/${this.state.searchInput.toLowerCase()}/images`;
    axios
      .get(urlDog)
      .catch(error => error)
      .then(result => {
        // console.log('axios onGetInfoSearchInput', result);
        this.setState({ dogSearchMini: result.data.message });
      });
  }
}

export default Store;
