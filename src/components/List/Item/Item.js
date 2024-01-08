import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./itemStyles";

export default function ItemList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{props.item}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
