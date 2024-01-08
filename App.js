import { StatusBar } from "expo-status-bar";
import Tab from "./src/components/Tab/Tab";
import React from "react";

export default function App() {
  return (
    <>
      <Tab />
      <StatusBar style="light" />
    </>
  );
}
