import React, { Component } from "react";

class Message extends Component {
  render() {
    const { children, title, className } = this.props;
    return (
      <article className={`message ${className}`}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{children}</div>
      </article>
    );
  }
}

export default Message;
