import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

import Message from "./Message";

const MessageList = (props) => {
  const { messages, messageListStyle } = props;

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

const styles = StyleSheet.create({});

export default MessageList;
