import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./components/Task";
import examples from "./components/tasks.json";

const FILTERS = ["All", "Open", "Closed", "WIP"];

export default function TodayTab() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  // Store tasks in state so updates trigger re-render
  const [tasks, setTasks] = useState(examples);

  const dateString = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  //Fetch runs from the backend API
  async function fetchRuns() {
    try {
      const response = await fetch("http://localhost:3000/api/runs");
      if (!response.ok) throw new Error("Failed to fetch runs");
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    fetchRuns().then((data) => {
      if (Array.isArray(data)) {
        setTasks(data);
      }
    });
  }, []);

  // Handler to update a task's status
  const handleStatusChange = (idx, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === idx ? { ...task, status: newStatus } : task
      )
    );
  };

  const filteredTasks = (filter) =>
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) =>
            typeof task.status === "string" &&
            task.status.toLowerCase() === filter.toLowerCase()
        );

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Today&#39;s Tasks</Text>
          <Text style={styles.dateText}>{dateString}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.collectionContainer}>
        <View style={styles.countContainer}>
          {FILTERS.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.task,
                selectedFilter === filter && styles.selectedTask,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.taskText,
                  selectedFilter === filter && styles.selectedTaskText,
                ]}
              >
                {filter}
              </Text>
              <Text style={styles.taskCount}>
                {filteredTasks(filter).length}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={styles.taskContainer}>
          {filteredTasks(selectedFilter).map((task, idx) => (
            <Task
              key={tasks.indexOf(task)}
              task={task}
              onStatusChange={(newStatus) => {
                // Find the index in the full tasks array
                const realIdx = tasks.indexOf(task);
                handleStatusChange(realIdx, newStatus);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "93%",
    marginHorizontal: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 11,
    marginTop: 1,
    height: 70,
  },
  info: {
    paddingLeft: 20,
  },
  infoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  dateText: {
    fontSize: 13,
    color: "#878787",
  },
  addButton: {
    width: 180,
    height: 47,
    backgroundColor: "#E2EBFA",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 13,
    color: "#1756D2",
    fontWeight: "bold",
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 7,
    height: 38,
  },
  task: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  selectedTask: {
    backgroundColor: "#E2EBFA",
  },
  taskText: {
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 10,
    color: "black",
  },
  selectedTaskText: {
    color: "#1756D2",
    fontWeight: "bold",
  },
  taskCount: {
    fontSize: 13,
    fontWeight: "600",
    color: "#878787",
    marginLeft: 6,
  },
  taskContainer: {
    width: "100%",
    height: 400,
    flex: 1,
  },
  collectionContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: 700,
    borderRadius: 10,
  },
});
