import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ToDo() {
    const [currentMenu, setCurrentMenu] = useState("Locations");
  
    const Today = () => {

        return (
            <View style={styles.todayContainer}>

            </View>
        )
    };

        const Locations = () => {

        return (
            <View style={styles.locationsContainer}>

            </View>
        )
    };

        const Future = () => {

        return (
            <View style={styles.FutureContainer}>

            </View>
        )
    };

  return (
    <View style={styles.container}>
      
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


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        backgroundColor: "lightblue", 
    },
    task: {
        padding: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        marginHorizontal: 5,
    },
    taskText: {
        fontSize: 16,
        color: "#333",
    },
});
