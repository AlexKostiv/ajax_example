import React, { Component } from 'react'; // eslint-disable-line
import Header from './header/Header.jsx';
import List from './list/List.jsx';
import Footer from './footer/Footer.jsx';

class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
