import { StyleSheet, Text, View } from "react-native";
import User from './../components/User/User'

export default function Index() {
  return (
    <View style={styles.container}>
      <User/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
