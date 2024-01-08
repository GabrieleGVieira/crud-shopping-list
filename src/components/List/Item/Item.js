import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import styles from "./itemStyles";
import db from "../../../../database/db";

export default function ItemList(props) {
  async function handleEditPress() {
    const item = await db.getItem(props.id);
    props.navigation.navigate("Form", item);
  }

  async function handleDeletePress() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja excluir este item?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            db.deleteItem(props.id).then((response) =>
              props.navigation.navigate("List", { id: props.id })
            );
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{props.item}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
