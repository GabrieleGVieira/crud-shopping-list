import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import List from "../List/List";
import Form from "../Form/Form";
import styles from "./tabStyles";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: styles.tabBarActive.color,
          tabBarInactiveTintColor: styles.tabBarInactive.color,
          tabBarActiveBackgroundColor: styles.tabBarActive.background,
          tabBarInactiveBackgroundColor: styles.tabBarInactive.background,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: styles.tabBarIcon,
          headerShown: false,
        }}
      >
        <Screen
          name="List"
          component={List}
          options={{
            tabBarLabel: "Compras",
          }}
        />
        <Screen
          name="Form"
          component={Form}
          options={{
            tabBarLabel: "Adicionar",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
