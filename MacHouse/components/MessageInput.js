import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, IconButton } from "react-native-paper";

const MessageInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="outlined"
        placeholder="Send a message"
        style={styles.messageBox}
      />
      <IconButton
        icon="send"
        size={26}
        animated="true"
        style={styles.sendButton}
        onPress={() => console.log("Pressed Send")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageBox: {
    flexGrow: 1,
    alignSelf: "stretch",
  },
  sendButton: {},
});

export default MessageInput;
