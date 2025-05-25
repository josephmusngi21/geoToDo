import { StyleSheet, View } from "react-native";
import User from './../components/User/User';
import ToDo from './../components/ToDo/ToDo';

export default function Index() {
  return (
    <View style={styles.container}>
      <User />
      <ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
  },
});
