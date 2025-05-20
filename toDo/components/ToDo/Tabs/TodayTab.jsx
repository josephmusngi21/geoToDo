import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function TodayTab() {
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

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


    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        display: "flex", 
        flexDirection: "row",
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
});
