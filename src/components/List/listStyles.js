import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D93600",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    width: "90%",
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
});

export default styles;
