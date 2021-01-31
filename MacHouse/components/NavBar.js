import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const NavBar = () => {
  return (
    <Appbar style={styles.nav}>
      <Appbar.Action
        icon="chat"
        color="#F3C761"
        onPress={() => console.log("Pressed chat")}
      />
      <Appbar.Action
        icon="gauge"
        color="#F3C761"
        onPress={() => console.log("Pressed dashboard")}
      />
      <Appbar.Action
        icon="home"
        color="#F3C761"
        onPress={() => console.log("Pressed home")}
      />
      <Appbar.Action
        icon="bank"
        color="#F3C761"
        onPress={() => console.log("Pressed ledger")}
      />
      <Appbar.Action
        icon="calendar-month"
        color="#F3C761"
        onPress={() => console.log("Pressed Calendar")}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#850044",
  },
});

export default NavBar;
