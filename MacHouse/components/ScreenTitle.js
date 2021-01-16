import React from "react";
import { Appbar } from "react-native-paper";

const ScreenTitle = (props) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={props.screenTitle} />
    </Appbar.Header>
  );
};

export default ScreenTitle;
