import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ContextProvider } from "./src/ContextProvider/ContextProvider";
import Main from "./src/views/Main";

export default function App() {
  return (
    <>
      {/* //<StatusBar style="light" /> */}
      <ContextProvider>
        <Main />
      </ContextProvider>
    </>
  );
}
