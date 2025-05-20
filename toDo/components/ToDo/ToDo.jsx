import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TodayTab from "./Tabs/TodayTab";

export default function ToDo() {
    const [currentMenu, setCurrentMenu] = useState("Today");

    const menus = [
        { key: "Locations", label: "Locations" },
        { key: "Today", label: "Today's Task" },
        { key: "Future", label: "Future Task" },
    ];
    

    return (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                {menus.map((menu) => (
                    <TouchableOpacity
                        key={menu.key}
                        style={styles.task}
                        onPress={() => setCurrentMenu(menu.key)}
                    >
                        <Text
                            style={[
                                styles.taskText,
                                currentMenu === menu.key
                                    ? styles.selectedTaskText
                                    : styles.unselectedTaskText,
                            ]}
                        >
                            {menu.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

                <TodayTab />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    taskContainer: {
        height: 70,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "94%",
        borderBottomWidth: 0.3,
    },
    task: {
        borderRadius: 5,
        marginHorizontal: 2,
    },
    taskText: {
        fontSize: 20,
        fontWeight: "500",
        padding: 3,
        marginHorizontal: 7,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
    },
    selectedTaskText: {
        color: "#000",
        borderBottomColor: "#000",
        borderBottomWidth: 1.4,
    },
    unselectedTaskText: {
        color: "#aaa",
    },
});
