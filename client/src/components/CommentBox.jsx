import React, { Component } from 'react';
import Header from './Header.jsx';
import { Ajax } from '../utils/ajax';

export class CommentBox extends Component {
  constructor() {
    super();
    this.test = 'Hello world';
    this.storage = [];
  }

  pushItemToList(item) {
    this.storage.push(item);
  }

  render() {// eslint-disable-line
    return (
      <div className="comment-box_header">
        <Header onSubmit={this.pushItemToList.bind(this)}></Header>
      </div>
    );
  }
}

export default CommentBox;
