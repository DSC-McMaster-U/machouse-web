import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Management from "./screens/Management";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#7b8be0",
    accent: "#850044",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Management />
    </PaperProvider>
  );
}
