import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Task({ task, onStatusChange }) {
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

  const [expanded, setExpanded] = useState(false);

  // Use local state for status to ensure visual updates
  const [localStatus, setLocalStatus] = useState(task.status);
  const status = localStatus;
  const isDone = status === "Closed";
  const isWip = status === "WIP";

  // Notify parent to update status, so tabs can react
  const nextStatus = () => {
    let newStatus;
    if (status === "Open") newStatus = "WIP";
    else if (status === "WIP") newStatus = "Closed";
    else newStatus = "Open";
    setLocalStatus(newStatus);
    if (typeof onStatusChange === "function") {
      onStatusChange(newStatus);
    }
  };

  // Description logic
  const maxDescLength = 120;
  const isLongDesc = task.description.length > maxDescLength;
  const shownDescription = !expanded && isLongDesc
    ? task.description.slice(0, maxDescLength) + "..."
    : task.description;

  // Container height logic
  const containerHeight = expanded ? null : 120;

  return (
    <View style={[styles.container, containerHeight ? { height: containerHeight } : { minHeight: 120 }]}>
      <View style={styles.topContainer}>
        <View style={styles.info}>
          <Text
            style={[
              styles.title,
              isDone && styles.titleDone,
              isWip && styles.titleWip,
            ]}
          >
            {task.title}
          </Text>
          <TouchableOpacity
            activeOpacity={isLongDesc ? 0.7 : 1}
            onPress={() => isLongDesc && setExpanded(e => !e)}
            style={{ alignSelf: "flex-start" }}
          >
            <Text
              style={[
                styles.description,
                isDone && styles.descriptionDone,
                isWip && styles.descriptionWip,
                isLongDesc && {},
              ]}
              numberOfLines={expanded ? undefined : 3}
            >
              {shownDescription}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={nextStatus}
        >
          <View style={[
            styles.circle,
            isDone && styles.circleFilled,
            isWip && styles.circleWip,
            !isDone && !isWip && { borderColor: "#A8A8A8", backgroundColor: "#fff" }
          ]}>
            {/* Visual indicator for status */}
            {status === "Open" && (
              <Text style={{ color: "#A8A8A8", fontSize: 18, fontWeight: "bold" }}>○</Text>
            )}
            {isWip && (
              <Text style={styles.wipMark}>…</Text>
            )}
            {isDone && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
          {/* Status stepper below the circle */}
          <View style={{ flexDirection: "row", marginTop: 6, alignItems: "center" }}>
            <View style={{
              width: 8, height: 8, borderRadius: 4,
              backgroundColor: status === "Open" ? "#A8A8A8" : "#E0E0E0",
              marginHorizontal: 2
            }} />
            <View style={{
              width: 8, height: 8, borderRadius: 4,
              backgroundColor: status === "WIP" ? "#FFA500" : "#E0E0E0",
              marginHorizontal: 2
            }} />
            <View style={{
              width: 8, height: 8, borderRadius: 4,
              backgroundColor: status === "Closed" ? "#4CAF50" : "#E0E0E0",
              marginHorizontal: 2
            }} />
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
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadowColor: "#F9F9F9",
    alignSelf: "center",
    marginVertical: 20,
    // height is set dynamically
  },
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
  info: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 14,
    flex: 1,
    justifyContent: "center",
    minHeight: 50,
    maxWidth: "80%",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#222",
    maxWidth: "100%",
    minHeight: 24,
    lineHeight: 24,
    overflow: "hidden",
  },
  titleDone: {
    textDecorationLine: "line-through",
    color: "#A8A8A8",
  },
  titleWip: {
    color: "#FFA500", // orange for WIP
  },
  description: {
    fontWeight: "250",
    fontSize: 14,
    marginTop: 3,
    color: "#444",
    maxWidth: "100%",
    minHeight: 20,
    lineHeight: 20,
    overflow: "hidden",
  },
  descriptionDone: {
    textDecorationLine: "line-through",
    color: "#C0C0C0",
  },
  descriptionWip: {
    color: "#FFA500",
  },
  statusButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    alignSelf: "center",
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
  circleWip: {
    backgroundColor: "#FFA500",
    borderColor: "#FFA500",
  },
  checkmark: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  wipMark: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -2,
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
