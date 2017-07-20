import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import ListItem from '../listItem/ListItem.jsx';
import { Ajax } from '../../utils/ajax';

import './commentBox.styl';

export class CommentBox extends Component {
  static baseUrl() {
    return 'http://localhost:4001/comments';
  }

  constructor() {
    super();
    this.test = 'Hello world';
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    Ajax.get(CommentBox.baseUrl(), (resp) => {
      this.setState({
        comments: resp
      });
    }, (e) => {
      throw new Error(e);
    });
  }

  onItemUpdate(item) {
    console.log(item);
    const url = CommentBox.baseUrl();
    Ajax.put(`${url}/${item.id}`, item, (response) => {
      this.setState((prevState) => {
        const newState = Object.assign(prevState);
        newState.comments = newState.comments.reduce((initialArray, comment) => {
          if (comment.id === response.id) {
            initialArray.push(response);
          } else {
            initialArray.push(comment);
          }
          return initialArray;
        }, []);

        return newState;
      });
    }, (e) => {
      throw Error(e);
    });
  }

  pushItemToList(item) {
    Ajax.post(CommentBox.baseUrl(), item, (comments) => {
      console.log('response from server', comments);
      this.setState({
        comments
      });
    },
    (e) => {
      throw Error(e.message);
    });
  }

  render() {// eslint-disable-line
    const list = this.state.comments.map((commentFromStorage) => {
      console.log(commentFromStorage);
      return <ListItem key={commentFromStorage.id} onUpdate={this.onItemUpdate.bind(this)} comment={commentFromStorage}></ListItem>;
    });

    return (
      <div className="c_comment-box">
        <div className="c_comment-box_header">
          <Header onSubmit={this.pushItemToList.bind(this)}></Header>
        </div>
        <div className="c_comment-box_content">
          {list}
        </div>
        <div className="c_comment-box_footer">
        </div>
      </div>);
  }
}

export default CommentBox;
