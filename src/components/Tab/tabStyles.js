import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBarActive: { color: "#32264d", background: "#ebebf5" },
  tabBarInactive: { color: "#c1bccc", background: "#fafafc" },
  tabBarLabel: {
    fontSize: 13,
    position: "absolute",
    top: 15,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarIcon: { display: "none" },
});

export default styles;
