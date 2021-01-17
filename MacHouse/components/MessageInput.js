import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, IconButton } from "react-native-paper";

const MessageInput = (props) => {
  const [messageText, setMessageText] = useState("");

  const messageTextHandler = (enteredText) => {
    setMessageText(enteredText);
  };

  const sendMessageHandler = (message) => {
    props.onSend(message);
    setMessageText("");
    resetInputHandler();
  };

  const sendMessageInput = useRef();
  const [resetInput, setResetInput] = useState(true);

  const resetInputHandler = () => {
    resetInput ? setResetInput(!resetInput) : setResetInput(!resetInput);
  };

  useEffect(() => sendMessageInput.current.clear(), [resetInput]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="outlined"
        placeholder="Send a message"
        style={styles.messageBox}
        onChangeText={messageTextHandler}
        ref={sendMessageInput}
      />
      <IconButton
        icon="send"
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
