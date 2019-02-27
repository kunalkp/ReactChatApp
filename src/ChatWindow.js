import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddMessage from './AddMessage';
import ChatHistory from './ChatHistory';

class ChatWindow extends Component {
  
  onMessage = (message) => {
    this.props.onMessage(this.props.user.username, message);
  };
  
  render() {
    const { messages, user } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <ChatHistory messages={messages} user={user} />
        <AddMessage onMessage={this.onMessage} />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  onMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow