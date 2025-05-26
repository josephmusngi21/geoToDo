import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Task({ task }) {
  if (!task) {
    task = {
      title: "Task Title",
      description: "Task Description",
      day: "Today",
      date: "2023-10-01",
      time: "12:00",
      status: "Open",
      location: "No Location",
    };
  }

  const attributes = ["title", "description", "date", "time", "status", "location"];
  attributes.forEach(attr => {
    if (!task[attr] || task[attr] === "null" || task[attr] === null) {
      task[attr] = `No ${attr.charAt(0).toUpperCase() + attr.slice(1)}`;
    }
  });

  const [status, setStatus] = useState(task.status);
  const [expanded, setExpanded] = useState(false);

  const isDone = status === "Closed";
  const maxDescLength = 10;
  const isLongDesc = task.description.length > maxDescLength;
  const displayDescription = !expanded && isLongDesc
    ? task.description.slice(0, maxDescLength) + "..."
    : task.description;

  return (
    <View style={[styles.container, expanded && styles.containerExpanded]}>
      <View style={styles.topContainer}>
        <View style={styles.info}>
          <Text
            style={[
              styles.title,
              isDone && styles.titleDone,
            ]}
          >
            {task.title}
          </Text>
          <TouchableOpacity
            activeOpacity={isLongDesc ? 0.7 : 1}
            onPress={() => isLongDesc && setExpanded(!expanded)}
          >
            <Text
              style={[
                styles.description,
                isDone && styles.descriptionDone,
              ]}
              numberOfLines={expanded ? undefined : 3}
            >
              {displayDescription}
            </Text>
            {isLongDesc && !expanded && (
              <Text style={styles.expandHint}>Tap to expand</Text>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => setStatus(isDone ? "Open" : "Closed")}
        >
          <View style={[styles.circle, isDone && styles.circleFilled]}>
            {isDone && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.day}>{task.day}</Text>
        <Text style={styles.date}>{task.date}</Text>
        <Text style={styles.time}>{task.time}</Text>
        <Text style={styles.location}>{task.location}</Text>
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
    alignSelf: "center",
    marginVertical: 20,
    overflow: "hidden",
  },
  // Remove containerExpanded from here, move expansion to topContainer
  topContainer: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    minHeight: 70,
    justifyContent: "space-between",
    marginHorizontal: 6,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  topContainerExpanded: {
    minHeight: 140, // or any value that fits your expanded content
    alignItems: "flex-start",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 14,
    flex: 1,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#222",
  },
  titleDone: {
    textDecorationLine: "line-through",
    color: "#A8A8A8",
  },
  description: {
    fontWeight: "250",
    fontSize: 14,
    marginTop: 3,
    color: "#444",
  },
  descriptionDone: {
    textDecorationLine: "line-through",
    color: "#C0C0C0",
  },
  expandHint: {
    color: "#888",
    fontSize: 12,
    marginTop: 2,
  },
  statusButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#A8A8A8",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  circleFilled: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  checkmark: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 40,
    width: "95%",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  day: {
    fontSize: 16,
    fontWeight: "490",
    marginHorizontal: 10,
    color: "#A8A8A8",
  },
  date: {
    fontSize: 14,
    fontWeight: "490",
    color: "#D5D5D5",
  },
  time: {
    fontSize: 14,
    fontWeight: "490",
    color: "#D5D5D5",
    marginLeft: 6,
  },
  location: {
    fontSize: 14,
    fontWeight: "430",
    color: "#D5D5D5",
    marginLeft: 6,
  },
});
