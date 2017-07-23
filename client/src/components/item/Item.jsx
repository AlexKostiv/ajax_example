import React, { Component } from 'react';
import './Item.styl';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      isEditable: false,
      comment: {
        author: '',
        text: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      isEditable: false,
      comment: this.props.comment
    });
  }

  _enableEdit(e) {
    e.target.classList.add('editable');

    this.setState((prevState) => {
      const newState = Object.assign(prevState);
      newState.isEditable = true;
      return newState;
    });
  }


  onBlur(e) {
    e.target.closest('.list-item').classList.remove('editable');
    e.persist();
    this.setState((prevState, newValue) => {
      const newState = Object.assign(prevState);
      newState.isEditable = false;
      newState.comment.author = e.target.textContent;
      return newState;
    }, () => {
      this.props.onUpdate(this.state.comment);
    });
  }

  render() {
    return (
      <div className="list-item" onDoubleClick={this._enableEdit.bind(this)}>
        <div className="list-item_text">
          {this.props.comment.text}
        </div>
        <div className="list-item_author">
          <span className="list-item_author-content"
            onBlur={this.onBlur.bind(this)}
            contentEditable={this.state.isEditable}>{this.state.comment.author}</span></div>
        <div className="list-item_date">{this.props.comment.date}</div>
      </div>
    );
  }
}

export default ListItem;