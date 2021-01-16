import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const MessageList = (props) => {
  const { messages, messageListStyle } = props;

  return (
    <ScrollView style={messageListStyle}>
      {messages.map((message) => (
        <View key={message.id} style={styles.messageContainer}>
          <Avatar.Text size={40} label={message.initials} />
          <View style={styles.besideAvatar}>
            <View style={styles.messageHead}>
              <Text style={styles.senderName}>{message.sender}</Text>
              <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>
            <Text style={styles.messageContent}>{message.message}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    width: "90%",
  },
  besideAvatar: {
    paddingLeft: 8,
    flex: 1,
  },
  messageHead: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  senderName: {
    paddingRight: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  timestamp: {
    color: "grey",
  },
  messageContent: {
    flexWrap: "wrap",
    fontSize: 16,
  },
});

export default MessageList;
