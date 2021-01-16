import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const NavBar = (props) => {
  return (
    <Appbar style={styles.nav}>
      <Appbar.Action icon="chat" onPress={() => console.log("Pressed chat")} />
      <Appbar.Action
        icon="gauge"
        onPress={() => console.log("Pressed dashboard")}
      />
      <Appbar.Action icon="home" onPress={() => console.log("Pressed home")} />
      <Appbar.Action
        icon="bank"
        onPress={() => console.log("Pressed ledger")}
      />
      <Appbar.Action
        icon="calendar-month"
        onPress={() => console.log("Pressed Calendar")}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default NavBar;
