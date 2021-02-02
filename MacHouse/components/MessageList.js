import React from "react";
import { ScrollView } from "react-native";

import Message from "./Message";

const MessageList = (props) => {
  const { messages, messageListStyle } = props;

  // output all the messages into a scrollview
  return (
    <ScrollView style={messageListStyle}>
      {messages.map((message) => (
        <Message
          key={message.id}
          initials={message.initials}
          senderName={message.sender}
          timestamp={message.timestamp}
          message={message.message}
        />
      ))}
    </ScrollView>
  );
};

export default MessageList;
