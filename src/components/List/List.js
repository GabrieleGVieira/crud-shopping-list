import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./listStyles"

export default function List() {
    return (
        <View style={styles.container}>
            <Text> List </Text>
            <StatusBar style="light" />
        </View>
    )
}