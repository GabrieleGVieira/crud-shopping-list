import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./itemStyles";
import db from "../../../../database/db";

export default function ItemList(props) {

  async function handleEditPress() {
    const item = await db.getItem(props.id);
    props.navigation.navigate("Form", item)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{props.item}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
