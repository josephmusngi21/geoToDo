import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ToDo() {
  const Menu = () => {
    return (
      <View style={styles.taskContainer}>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Today&apos;s Task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Future Task</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  taskContainer: {

  },
  task: {
    
  },
});
