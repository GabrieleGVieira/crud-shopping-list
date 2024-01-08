import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./formStyles"

export default function Form() {

  

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item Para Compra</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="O que está faltando em casa?"
            clearButtonMode="always"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            keyboardType={"numeric"}
            clearButtonMode="always"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </View>
    );
}

