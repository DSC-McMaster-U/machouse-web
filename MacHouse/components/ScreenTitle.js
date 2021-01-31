import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const ScreenTitle = (props) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title={props.screenTitle} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#850044",
  },
});

export default ScreenTitle;
