import React, { Component } from 'react'; // eslint-disable-line
import './header.styl';

class Header extends Component {
  constructor() {
    super();
    this.headerText = 'Comment box';
    this.btnLabel = 'Add';
    this.state = {
      author: '',
      text: 'hello worrld'
    };

    this.addItem = this.addItem.bind(this);
    this.updateTimeout = null;
  }

  updateAuthorName(e) {
    const value = e.target.value;
    const previousState = Object.assign(this.state);
    this.setState({
      author: value,
      text: previousState.text
    });
  }

  updateText(e) {
    const newTextValue = e.target.value;
    const previousState = Object.assign(this.state);
    this.setState({
      author: previousState.author,
      text: newTextValue
    });
  }

  componentDidMount() {
    console.log('Component did mount!');
    console.log(this.props);
  }

  addItem(e) {
    this.props.onSubmit(this.state);
  }

  render() {
    return (<div className="header">
      <h2>{this.headerText}</h2>
      <div className="c_input">
        <input type="text" className="input_field" onChange={this.updateAuthorName.bind(this)} value={this.state.author}/>
      </div>
      <div className="c_textarea">
        <textarea className="textarea" onChange={this.updateText.bind(this)} value={this.state.text}></textarea>
      </div>
      <div className="c_btn">
        <div className="btn btn-add" onClick={this.addItem.bind(this)}>{this.btnLabel}</div>
      </div>
    </div>);
  }
}

export default Header;


