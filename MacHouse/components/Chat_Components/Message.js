import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const Message = (props) => {
  return (
    <View style={styles.messageContainer}>
      <Avatar.Text size={40} label={props.initials} />
      <View style={styles.besideAvatar}>
        <View style={styles.messageHead}>
          <Text style={styles.senderName}>{props.senderName}</Text>
          <Text style={styles.timestamp}>{props.timestamp}</Text>
        </View>
        <Text style={styles.messageContent}>{props.message}</Text>
      </View>
    </View>
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

export default Message;
