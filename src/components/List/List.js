import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./listStyles";
import ItemList from "./Item/Item";
import db from "../../../database/db";

export default function List({route, navigation}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.getItems().then(items => setItems(items));
  }, [route]);

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
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
