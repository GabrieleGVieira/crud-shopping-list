import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./formStyles"

import db from "../../../database/db"

export default function Form({navigation}) {

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState("")

  function handleDescriptionChange(description) {
    setDescription(description);;
  }

  function handleAmountChange(amount) {
    setAmount(amount)
  }

  async function handleButtonPress() {
    const listItem = { id: new Date().getTime(), description, amount: parseInt(amount)};
    
    db.saveItem(listItem).then(response => navigation.navigate("List", listItem))
  }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item Para Compra</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="O que está faltando em casa?"
            clearButtonMode="always"
            onChangeText={handleDescriptionChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            keyboardType={"numeric"}
            clearButtonMode="always"
            onChangeText={handleAmountChange}
          />
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </View>
    );
}

