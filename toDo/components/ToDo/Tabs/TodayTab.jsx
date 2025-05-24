import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Task from "./components/Task";

import examples from './components/tasks.json'


export default function TodayTab() {
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

      // Categorize tasks by status
      const tasksByStatus = {
        All: examples,
        Open: examples.filter(task => task.status.toLowerCase() === "open"),
        Closed: examples.filter(task => task.status.toLowerCase() === "closed"),
        WIP: examples.filter(task => task.status.toLowerCase() === "wip"),
      };

      // For the menu counts
      const taskMenus = {
        All: tasksByStatus.All.length,
        Open: tasksByStatus.Open.length,
        Closed: tasksByStatus.Closed.length,
        WIP: tasksByStatus.WIP.length,
      };

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

        <View style={styles.countContainer}>
            {Object.entries(taskMenus).map(([key, value]) => (
                <TouchableOpacity
                key={key}
                style={styles.task}
                >
                <Text style={styles.taskText}>{key}</Text>
                <Text style={styles.taskCount}>{value}</Text>
                </TouchableOpacity>
            ))}
        </View>
            
        {/* <ScrollView contentContainerStyle={styles.scrollContent} style={styles.taskContainer}>
          {examples.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                />
            ))}
        </ScrollView> */}
        <View style={styles.taskContainer}>
            {examples.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                />
            ))}
          
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    display: "flex", 
    flexDirection: "column",
    width: "93%",
    marginHorizontal: 10,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 7,
    marginVertical: 24,

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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 7,
  },
  task: {
    display: "flex",
    flexDirection: "row",
  },
  taskText: {
    fontSize: 15,
    fontWeight: 570,
    paddingHorizontal: 10,
  },
  taskCount: {
    fontSize: 13,
    fontWeight: 600,
    color: "#878787",
    marginLeft: 6,
  },
  taskContainer: {
    width: "100%",
    paddingVertical: 7,
  },
  scrollContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

});
