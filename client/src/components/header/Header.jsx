import React, { Component } from 'react'; // eslint-disable-line
import './header.styl';


class Header extends Component {
  constructor() {
    super();
    this.headerText = 'Comment box';
  }
  render() {
    return <div className="header">
        <h1>{this.headerText}</h1>
        <Input></Input>
    </div>
  }
}

export default Header;

