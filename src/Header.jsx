import React from 'react';
import { withRouter } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import actions from './actions';
import './css/header.css';

function Header(props) {
  return (
    <header className='header'>
      <section>
        <h1 className='header-logo'>Dog pictures</h1>
      </section>

      <section>
        <nav className='header-nav'>
          <HeaderLink exact to='/' className='header-nav-tab'>Home</HeaderLink>
          <HeaderLink to='/breeds' className='header-nav-tab'>List breeds</HeaderLink>
          <form
            onSubmit={e => {
              e.preventDefault();
              actions.getInfoSearchInput();
              // eslint-disable-next-line react/prop-types
              props.history.push('/breeds');
              e.target.reset();
            }}
          >
            <input
              type='text'
              className='inputSearch'
              placeholder='Enter breed name, e.g. beagle, collie, pug or other'
              onChange={e => {
                actions.getInfoInput(e);
              }}
            />
            <button type='submit' className='btnSearch'>
              Search
            </button>
          </form>
        </nav>
      </section>
    </header>
  );
}
export default withRouter(Header);
