import { StyleSheet, Text, View } from "react-native";
// import User from './../components/User/User';
// import ToDo from './../components/ToDo/ToDo';
import Task from '../components/ToDo/Tabs/components/Task'
export default function Index() {
  return (
    <View style={styles.container}>
      <Task task={null} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
