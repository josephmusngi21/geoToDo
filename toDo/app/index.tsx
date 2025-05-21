import { StyleSheet, View } from "react-native";
import User from './../components/User/User';
import ToDo from './../components/ToDo/ToDo';
import Task from '../components/ToDo/Tabs/components/Task'
import TodayTab from "@/components/ToDo/Tabs/TodayTab";

export default function Index() {
  return (
    <View style={styles.container}>
      <User />
      <TodayTab />
      <ToDo />
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
