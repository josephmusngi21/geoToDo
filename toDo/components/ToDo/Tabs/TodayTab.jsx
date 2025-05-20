import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function TodayTab() {
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

      const taskMenus = {
        //The int for each of these will eventuall be replaced with the number of tasks in each category from mongoDb
        All: 0,
        Open: 0,
        Closed: 0,
        WIP: 0,
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

        <View style={styles.taskContainer}>
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
    taskContainer: {
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

});
