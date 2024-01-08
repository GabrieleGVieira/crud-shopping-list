import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./listStyles";
import ItemList from "./Item/Item";

export default function List() {
  const [items, setItems] = useState([
    { id: 1, amount: 5, description: "arroz" },
    { id: 2, amount: 1, description: "feijão" },
    { id: 3, amount: 0.5, description: "lentilha" },
    { id: 4, amount: 1, description: "massa" },
    { id: 5, amount: 1, description: "katchup" },
    { id: 6, amount: 1, description: "queijo-ralado" },
    { id: 7, amount: 1, description: "bacon" },
    { id: 8, amount: 1, description: "linguiça" },
    { id: 9, amount: 1, description: "refrigerante" },
    { id: 10, amount: 1, description: "queijo-minas" },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}> Lista de Compras </Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {items.map((item) => {
          return (
            <ItemList
              key={item.id}
              id={item.id}
              item={item.amount + "  de " + item.description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
