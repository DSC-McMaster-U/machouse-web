import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, IconButton } from "react-native-paper";

const MessageInput = (props) => {
  const [messageText, setMessageText] = useState("");

  const messageTextHandler = (enteredText) => {
    setMessageText(enteredText);
  };

  // overall procedure for sending a message
  const sendMessageHandler = (message) => {
    props.onSend(message);
    setMessageText("");
    resetInputHandler();
  };

  // Add a reference to the message input field for clearing
  const sendMessageInput = useRef();

  // reset input flag to clear the message input field
  const [resetInput, setResetInput] = useState(true);

  const resetInputHandler = () => {
    resetInput ? setResetInput(!resetInput) : setResetInput(!resetInput);
  };

  // clears the message input field on message send
  useEffect(() => sendMessageInput.current.clear(), [resetInput]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="outlined"
        selectionColor="#850044"
        outlineColor="#850044"
        placeholder="Send a message"
        style={styles.messageBox}
        onChangeText={messageTextHandler}
        ref={sendMessageInput}
      />
      <IconButton
        icon="send"
        color="#850044"
        size={26}
        animated="true"
        onPress={() => sendMessageHandler(messageText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    flexWrap: "nowrap",
  },
  messageBox: {
    flexGrow: 0,
    width: "88%",
  },
});

export default MessageInput;
