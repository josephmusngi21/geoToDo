import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native-web";

export default function Task({ task }) {
  //Task will be set up as:
  // task = {
  //     title: "Task Title",
  //     description: "Task Description",
  //     date: "2023-10-01",
  //     time: "12:00",
  //     status: "Open",
  //     }

  if (!task) {
    task = {
      title: "Task Title",
      description: "Task Description",
      day: "Today",
      date: "2023-10-01",
      time: "12:00",
      status: "Open",
    };
  }

  const [status, setStatus] = useState(task.status);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.info}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.description}>{task.description}</Text>
        </View>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => setStatus(status === "Open" ? "Closed" : "Open")}
        >
          <View
            style={[styles.circle, status === "Closed" && styles.circleFilled]}
          >
            {status === "Closed" && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.day}>{task.day}</Text>
        <Text style={styles.date}>{task.date}</Text>
        <Text style={styles.time}>{task.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "92%",
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadowColor: "#F9F9F9",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    height: 70,
    justifyContent: "space-between",
    marginHorizontal: 6,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#000", 
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 14,
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
  },
  description: {
    fontWeight: 250,
    fontSize: 14,
    marginTop: 3,
  },
  statusButton: {},
  circle: {},
  circleFilled: {},
  checkmark: {},
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    height: 40,
    width: "95%",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  day: {
    fontSize: 16,
    fontWeight: 490,
    marginHorizontal: 10,
    color: "#A8A8A8",
  },
  date: {
    fontSize: 14,
    fontWeight: 490,
    color: "#D5D5D5",
  },
  time: {
    fontSize: 14,
    fontWeight: 490,
    color: "#D5D5D5",
  },
});
